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
  const { email, password } = request.body

  db.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User created successfully`)
    console.log(results);
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

