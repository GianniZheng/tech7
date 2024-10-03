const express = require('express')
const app = express()
const port = 3000

/*
const person {
    name: "ciccio"
    username: "cicciogamer"
}

const app {
    get: () =>{}
}
*/
app.get('/', (req, res) => {
  res.send('Hello World!') // risposta in '/'
})

app.post('/sign-in', (req, res) => {
    console.log(req.body)
    res.send('POST request to the home page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})