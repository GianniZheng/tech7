const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.status(200)
  res.sendFile(__dirname + "/public/home.html")
})

app.get("/profile", (req, res) =>{
  res.get(req)
  res.sendFIle(__dirname + "/public/profile.html");
})

app.get("/ciao", (req, res) =>{
  res.send("sei sul path /ciao!");
})
/*
app.post("/login", (req, res) =>{
  let body = req.body
  console.log(body)
})
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
