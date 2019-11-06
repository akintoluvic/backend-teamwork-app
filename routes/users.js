const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db')


const getUsers = (request, response) => {
  db.query('SELECT * FROM users ORDER BY userId ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM users WHERE userId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { firstName, lastName, email, password, gender, jobRole, department, address } = request.body
  bcrypt.hash(password, 10).then(
    (hash) => {
      db.query('INSERT INTO users (firstName, lastName, email, password, gender, jobRole, department, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING userId, userType', 
      [firstName, lastName, email, hash, gender, jobRole, department, address], (error, results) => {
        if (error) {
          response.status(400).json({
            "status": "error",
            "error": error
          })
          throw error
        }
        response.status(201).json({
          "status": "success",
          "data": {
            "message": "User Created Successfully",
            "email": email,
            "userId": results.rows[0].userid,
            // "userType": results.rows[0].usertype,
            "firstName": firstName, 
            "lastName":  lastName,
            "email": email,
            "gender": gender,
            "jobRole": jobRole,
            "department": department,
            "address": address
          }
        })
    })
  })
}

const updateUser = (request, response) => {
  const userId = parseInt(request.params.id)
  const { firstName, lastName } = request.body

  db.query(
    'UPDATE users SET firstName = $1, lastName = $2 WHERE userId = $3',
    [firstName, lastName, userId],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${userId}`)
    }
  )
}

const deleteUser = (request, response) => {
  const userId = parseInt(request.params.id)

  db.query('DELETE FROM users WHERE userId = $1', [userId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${userId}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}

