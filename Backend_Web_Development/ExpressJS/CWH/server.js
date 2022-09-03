const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Namaste World!')
})

app.get('/about', (req, res) => {
    res.send('This is about Page!')
  })

  app.get('/contact', (req, res) => {
    res.send('This is Contact Page!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})