import express from 'express'
import environment from 'dotenv'
import router from './router'

environment.config()
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.text())

app.use(router)

app.listen(port, () => {
  console.log('Server listening on port 8080...')
})
