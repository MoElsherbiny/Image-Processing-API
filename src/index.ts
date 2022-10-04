import express, { Application } from 'express'
import * as dotenv from 'dotenv'
import routes from './routes/api/routes'

dotenv.config()
const port = process.env.PORT
const host = process.env.HOST
// create an instance server
const app: Application = express()
// add routing for / path

app.use(routes)
// start express server

app.listen(port, () => {
  console.log(`Server is starting at ${host}:${port}`)
})

export default app
