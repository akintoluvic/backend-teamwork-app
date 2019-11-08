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

const signIn = (request, response) => {
  const { email, password} = request.body

  db.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
    if (error) {
      response.send('Issue 1')
      throw error
    }
    if (results.rows.length < 1) {
      return response.status(401).json({
        error: new Error('User not found')
      });
    }
    bcrypt.compare(password, results.rows[0].password).then(
      (valid) => {
        if (!valid) {
          return response.status(401).json({
            error: new Error('Incorrect password!')
          });
        }
        const token = jwt.sign(
          { "userId": results.rows[0].userid },
          'RANDOM_TOKEN_SECRET',
          { expiresIn: '24h' });
          response.status(200).json({
          userId: results.rows[0].userid,
          token: token
        });
      }
    ).catch(
      (error) => {
        response.status(500).json({
          "message": "its here",
          error: error
        });
      }
    );
  })
  
}

const createUser = (request, response) => {
  const { firstName, lastName, email, password, gender, jobRole, department, address } = request.body
  bcrypt.hash(password, 10).then(
    (hash) => {
      db.query('INSERT INTO users (firstName, lastName, email, password, gender, jobRole, department, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING userId, userType', 
      [firstName, lastName, email, hash, gender, jobRole, department, address], (error, results) => {
        if (error) {
          console.log(error)
          response.status(400).json({
            "status": "error",
            "error": error
          })
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
  signIn,
  createUser,
  updateUser,
  deleteUser,
}

