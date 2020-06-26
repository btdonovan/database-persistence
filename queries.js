const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'students',
  password: 'type your password here',
  port: 5432,
})

const getStudent = (req, res) => {
  pool.query(
    'SELECT * FROM students ORDER BY id ASC', 
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(results.rows)
      }
    }
  )
}

const searchStudent = (req, res) => {
  let search = req.query.search
  pool.query(
    "SELECT * FROM students WHERE name LIKE $1 ORDER BY id ASC", 
    [`%${search}%`],
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(results.rows)
      }
    }
  )
}

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    'SELECT * FROM students WHERE id = $1', 
    [id], 
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(results.rows)
      }
    }
  )
}

const getStudentGrades = (req, res) => {
  const id = parseInt(req.params.studentId)
  console.log(id)
  pool.query(
    'SELECT * FROM grades WHERE student_id = $1', 
    [id],
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).json(results.rows)
      }
    }
  )
}

const addGrade = (req, res) => {
  let grade = req.body.grade
  let studentId = req.body.student_id
  pool.query(
    'INSERT INTO grades (student_id, grade) VALUES ($1, $2)',
    [studentId, grade],
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.status(201)
        .send(`Grade ${grade} added for student ID ${studentId}.`)
      }
    }
  )
}

const addStudent = (req, res) => {
  let name = req.body.name
  pool.query(
    'INSERT INTO students (name) VALUES ($1)',
    [name],
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.status(201).send(`Student ${name} is registered.`)
      }
    }
  )
}

module.exports = {
  getStudent,
  searchStudent,
  getStudentById,
  getStudentGrades,
  addGrade,
  addStudent,
}