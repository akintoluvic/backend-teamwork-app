const db = require('../db')

const getComments = (request, response) => {
  db.query('SELECT * FROM comments ORDER BY commentId ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCommentById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM comments WHERE commentId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createComment = (request, response) => {
  const { comment, authorId, articleId, gifId } = request.body

  db.query('INSERT INTO comments (comment, authorId, articleId, gifId) VALUES ($1, $2, $3, $4)', [comment, authorId, articleId, gifId], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Comment added with ID: ${results.id}`)
    console.log(results);
  })
}

// const updateUser = (request, response) => {
//   const userId = parseInt(request.params.id)
//   const { firstName, lastName } = request.body

//   db.query(
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

  db.query('DELETE FROM comments WHERE commentId = $1', [commentId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Comment deleted with ID: ${commentId}`)
  })
}

module.exports = {
  getComments,
  getCommentById,
  createComment,
//   updateUser,
  deleteComment,
}
