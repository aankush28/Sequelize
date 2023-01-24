const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
var bodyParser = require('body-parser')
require('./config/db')
app.use(bodyParser.json())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})