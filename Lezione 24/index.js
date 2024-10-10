const express = require('express')
const app = express()
const port = 3000

app.use(express.static("html"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/home.html");
})

app.get('/services', (req, res) => {
  res.sendFile(__dirname + "/html/services.html");
})

app.get('/contacts', (req, res) => {
  res.sendFile(__dirname + "/html/contacts.html");
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/html/about.html");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})