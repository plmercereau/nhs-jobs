import axios from 'axios'
import { Request, Response } from 'express'
import * as cheerio from 'cheerio'
import { GraphQLClient } from 'graphql-request'
import { getSdk, VacanciesInsertInput } from './_sdk'

const client = new GraphQLClient(
  `${process.env.NHOST_BACKEND_URL}/v1/graphql`,
  {
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
    },
  }
)
const { upsertVacancies } = getSdk(client)

/** Encode form data */
const formUrlEncoded = (x: Record<string, string | number | boolean>) =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

/** format dd/mm/yyyy to yyyy-mm-dd - and return null if not valid */
const formatDate = (d: string) =>
  /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/.test(d)
    ? d.split('/').reverse().join('-')
    : null

/** Extract data from the html page, transform it to the format we want, and load it into the database */
const etl: (
  /** When true, extracts the entire available vacancies from the NHS website.
   * When false, only extracts the vacancies from the past two days
   * @default false */
  all?: boolean,
  /** The NHS jobs search is paginated: set the cursor to the given page
   * @default 1
   */
  page?: number
) => Promise<number> = async (all = false, page = 1) => {
  console.log(`loading page ${page}`)
  const { data } = await axios.post(
    'https://www.jobs.nhs.uk/xi/search_vacancy/',
    formUrlEncoded({
      page,
      daysback: all ? '' : 2,
      page_view_status: '{}',
      action: 'search',
      search_form: 1,
      keyword: '',
      location: '',
      searchBtn1: '',
      field: '',
      location_in: 'all',
      min_salary: 'ANY',
      max_salary: 'ANY',
      client_name: '',
      daysback_supercede: '',
      exclude: '',
      exclude_field: '',
      max_result: 100,
    }),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  )
  console.log(`fetched html`)
  const $ = cheerio.load(data)
  const vacanciesEls = $('div.vacancy')
  console.log(`found ${vacanciesEls.length} vacancies`)
  if (vacanciesEls.length) {
    const vacancies: VacanciesInsertInput[] = []
    vacanciesEls.each((_idx, el) => {
      const findDd = (cat: string) =>
        $(el)
          .find($(`dt:contains('${cat}:')`))
          .siblings()
          .text()
          .trim()
      const titleEl = $(el).find($('h2 > a'))
      const vacancy: VacanciesInsertInput = {
        id: parseInt(titleEl.attr('href')?.replace('/xi/vacancy/', '')!),
        title: titleEl.text().trim(),
        category: $(el).find($('h3')).text().trim(),
        agency: $(el).find($('p.agency')).text().trim(),
        salary: findDd('Salary'),
        posted: formatDate(findDd('Posted')),
        jobType: findDd('Job Type'),
        closingDate: formatDate(findDd('Closing Date')),
        staffGroup: findDd('Staff Group'),
        jobRef: findDd('Job Ref'),
      }
      // * Don't add if already exists (duplicate vacancy)
      if (vacancies.every(v => v.id !== vacancy.id)) {
        vacancies.push(vacancy)
      }
    })
    console.log(`inserting ${vacancies.length} vacancies into the database`)
    const { insertVacancies } = await upsertVacancies({ vacancies })
    const fetched = insertVacancies?.affected_rows
    if (fetched) {
      console.log(`page ${page}: upserted ${fetched} vacancies`)
      return fetched + (await etl(all, page + 1))
    } else throw Error('No vacancies fetched')
  }
  return 0
}

export default async (req: Request, res: Response) => {
  if (
    process.env.NHOST_BACKEND_URL?.indexOf('http://localhost:1337') === -1 &&
    req.headers['nhost-webhook-secret'] !== process.env.NHOST_WEBHOOK_SECRET
  ) {
    console.log('unauthorized attempt to run the webhook')
    return res.status(401).send('unauthorized')
  }
  try {
    etl(req.body.all).then(fetched => {
      console.log(`done: upserted ${fetched} vacancies`)
    })
    return res.status(200).json({ fetching: true })
  } catch (error) {
    return res.status(500).json(error)
  }
}
