import axios from 'axios'
import * as cheerio from 'cheerio'
import { request, gql } from 'graphql-request'

const HASURA_ENDPOINT = `${process.env.NHOST_BACKEND_URL}/v1/graphql`
const HASURA_SECRET = process.env.HASURA_GRAPHQL_ADMIN_SECRET

const UPSERT_VACANCIES = gql`
  mutation upsertVacancies($vacancies: [vacancies_insert_input!]!) {
    insertVacancies(
      objects: $vacancies
      on_conflict: {
        constraint: vacancies_pkey
        update_columns: [
          title
          category
          agency
          salary
          posted
          jobType
          closingDate
          staffGroup
          jobRef
        ]
      }
    ) {
      affected_rows
    }
  }
`

const formUrlEncoded = x =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

const form = {
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
  daysback: '',
  daysback_supercede: '',
  exclude: '',
  exclude_field: '',
  max_result: 100,
  page: 1,
}

// * format dd/mm/yyyy to yyyy-mm-dd - and return null if not valid
const formatDate = d =>
  /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/.test(d)
    ? d.split('/').reverse().join('-')
    : null

const load = async (all = false, page = 1) => {
  const { data } = await axios.post(
    'https://www.jobs.nhs.uk/xi/search_vacancy/',
    formUrlEncoded({ ...form, page, daysback: all ? '' : 2 }),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  )
  const $ = cheerio.load(data)
  const vacanciesEls = $('div.vacancy')
  if (vacanciesEls.length) {
    const vacancies = []
    vacanciesEls.each((_idx, el) => {
      const findDd = cat =>
        $(el)
          .find($(`dt:contains('${cat}:')`))
          .siblings()
          .text()
          .trim()
      const titleEl = $(el).find($('h2 > a'))
      const vacancy = {
        id: parseInt(titleEl.attr('href').replace('/xi/vacancy/', '')),
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

    const {
      insertVacancies: { affected_rows },
    } = await request(
      HASURA_ENDPOINT,
      UPSERT_VACANCIES,
      { vacancies },
      {
        'x-hasura-admin-secret': HASURA_SECRET,
      }
    )
    console.log(`${new Date().toISOString()} page ${page}: upserted ${affected_rows} vacancies`)
    return affected_rows + (await load(all, page + 1))
  }
  return 0
}

export default async (req, res) => {
  if (req.headers.NHOST_ADMIN_SECRET !== process.env.NHOST_ADMIN_SECRET) {
    return res.status(401)
  }
  try {
    const fetched = await load(req.body.all)
    console.log(`${new Date().toISOString()} done: upserted ${fetched} vacancies`)
    return res.status(200).json({ fetched })
  } catch (error) {
    return res.status(500).json(error)
  }
}
