import express from 'express'
import Image from '../resizing'
const routes = express.Router()

routes.get(
  '/',
  (_request: express.Request, response: express.Response): void => {
    response
      .status(200)
      .send(
        'Hello and welcome to the Udacity Image Processing API APP. I hope you had a good time.'
      )
  }
)

routes.use('/resize', Image)

export default routes
