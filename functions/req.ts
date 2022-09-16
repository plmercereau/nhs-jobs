import { Request, Response } from 'express'

export default async (req: Request, res: Response) => {
  console.log('ip', req.ip)
  console.log(req.headers)
  return res.json(req.headers)
}
