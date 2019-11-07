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

  db.query('SELECT * FROM comments WHERE postId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createComment = (request, response) => {
  const { comment, authorId, articleId, gifId } = request.body

  db.query('INSERT INTO comments (comment, authorId, articleId, gifId) VALUES ($1, $2, $3, $4) RETURNING commentId', [comment, authorId, articleId, gifId], (error, results) => {
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
        "message": "Article Created Successfully",
        "commentId": results.rows[0].commentid,
        "comment": comment,
        "authorId": authorId,
        "articleId": articleId,
        "gifId": gifId,
        // "createdOn": results.rows[0].createdOn
      }
    })
  })
}

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
  deleteComment,
}

