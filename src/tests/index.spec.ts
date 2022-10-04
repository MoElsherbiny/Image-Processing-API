import supertest from 'supertest'
import app from '../index'
import resize from '../utils/sharp'
import fileExists from '../routes/resizing'

const request = supertest(app)
it('All data is available', function () {
  expect(resize).toBeDefined()
})

it('Using the endpoint and the file name, as well as the width and height ', async () => {
  await request.get('/resize?file=fjord&width=100&height=100').expect(200)
})

it('Expect an error if you use endpoint without adding a file name.', async () => {
  await request.get('/resize?file=&width=100&height=100').expect(400)
})

it('When using the endpoint without adding width size, an error is expected.', async () => {
  await request.get('/resize?file=fjord&height=100').expect(400)
})
it('Expect an error if you use the endpoint without adding height to the photo. ', async () => {
  await request.get('/resize?file=fjord&width=100').expect(400)
})

it('this photo is already resized before', function () {
  expect(fileExists).toBeDefined()
})
