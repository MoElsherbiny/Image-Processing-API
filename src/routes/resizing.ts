import express, { Request, Response } from 'express'
import fs from 'fs-extra'
import { existsSync } from 'fs-extra'

import path from 'path'
import resize from '../utils/sharp'

const Image = express.Router()

Image.get('/', async (req: Request, res: Response) => {
  const height = Number(req.query.height)
  const width = Number(req.query.width)
  const file = String(req.query.file)
  const imgDirection = path.resolve('./') + '/assets'
  const newImgDir = path.resolve('./') + '/assets/image'
  const FileTest = path.resolve('./') + `/assets/${file}.jpg`
  const ImgExist =
    path.resolve('./') + `/assets/image/${file}_${width}_${height}.jpg`
  const newlyResized = path.resolve(
    `${newImgDir}/${file}_${width}_${height}.jpg`
  )

  if (!width || width <= 0) {
    return res.status(400).send('Sorry Retry with a different width number.')
  }
  if (!height || height <= 0) {
    return res
      .status(400)
      .send('Please provide a valid height. To resize the image height')
  }
  if (!file) {
    return res
      .status(400)
      .send(
        'Unfortunately, no file was found. Enter the name of the image you want to resize.'
      )
  }
  if (!existsSync(FileTest)) {
    return res
      .status(404)
      .send(
        'This image was not found because the resource was not found. Please check the image first and try again'
      )
  }

  const fileExists = fs.existsSync(ImgExist)
  await resize(file, width, height, imgDirection, newlyResized)

  if (fileExists) {
    console.log(
      'This image has already been resized.',
      'Try resizing another one'
    )
    res.sendFile(ImgExist)
  } else if (!fileExists) {
    console.log('Making a fresh image of a different size')
    res.sendFile(newlyResized)
  }
})

export default Image
