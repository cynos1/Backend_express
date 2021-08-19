const express = require('express')
const app = express()
const port = 4000
const data = require('./Student_Data.json')
// const axios = require('axios')
var cors = require('cors')
const { default: axios } = require('axios')

app.use(cors())

app.get('/users', (req, res) => {
  res.json({user:'tobi'})
})
app.get('/users/status', (req, res) => {
    res.statusCode('404').send('get away')
  })
  app.get('/getallentries', (req, res) => {
    res.json(data)
  })
  app.get('/getposts', (req,res) =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    // 
    .then(resp => res.status(200).json(resp.data))
    .catch(e =>console.log(e))

  })
  app.get('/getspacex', (req,res) =>{
    axios.get('https://docs.spacexdata.com/#9f1dfdc0-fbe8-4ae5-9209-7f3d649a627c')
    // 
    .then(resp => res.status(200).json(resp.data))
    .catch(e =>console.log(e))

  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})