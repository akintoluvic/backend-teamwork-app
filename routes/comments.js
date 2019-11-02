const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})
const getComments = (request, response) => {
  pool.query('SELECT * FROM comments ORDER BY commentId ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCommentById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM comments WHERE commentId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createComment = (request, response) => {
  const { email, password } = request.body

  pool.query('INSERT INTO comments (email, password) VALUES ($1, $2)', [email, password], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${results.id}`)
    console.log(results);
  })
}

// const updateUser = (request, response) => {
//   const userId = parseInt(request.params.id)
//   const { firstName, lastName } = request.body

//   pool.query(
//     'UPDATE comments SET firstName = $1, lastName = $2 WHERE userId = $3',
//     [firstName, lastName, commentId],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${commentId}`)
//     }
//   )
// }

const deleteComment = (request, response) => {
  const commentId = parseInt(request.params.id)

  pool.query('DELETE FROM comments WHERE commentId = $1', [commentId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${commentId}`)
  })
}

module.exports = {
  getComments,
  getCommentById,
  createComment,
//   updateUser,
  deleteComment,
}

