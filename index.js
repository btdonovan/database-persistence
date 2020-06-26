const express = require('express')
const bodyParser = require('body-parser')
const { response } = require('express')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`app running on port ${port}.`)
})

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/students', (req, res) => {
  if (!req.query.search) {
    db.getStudent(req, res)
  } else {
    db.searchStudent(req, res)
  }
})

app.get('/student/:id', (req, res) => {
  db.getStudentById(req, res)
})

app.get('/grades/:studentId', (req, res) => {
  db.getStudentGrades(req, res)
})

app.post('/grade', (req, res) => {
  db.addGrade(req, res)
})

app.post('/register', (req, res) => {
  db.addStudent(req, res)
})
