const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use(routes)

app.listen(4000, () => {
  console.log('🚀 APP running in http://localhost:4000 🚀');
})