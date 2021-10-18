import { Router } from 'express'

const router = Router()

router.all('*', (request, response) => {
  console.log('==> Request')
  console.log(request.method + ' ' + request.url)
  console.log(request.body)
  console.log('==')

  response.status(200).send()
})

export default router
