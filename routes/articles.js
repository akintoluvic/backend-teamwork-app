const db = require('../db')

const getArticles = (request, response) => {
  db.query('SELECT * FROM articles ORDER BY articleId ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getArticleById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM articles WHERE articleId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createArticle = (request, response) => {
  const { title, article, authorId, tag } = request.body

  db.query('INSERT INTO articles (title, article, authorId, tag) VALUES ($1, $2, $3, $4) RETURNING articleId', [title, article, authorId, tag], (error, results) => {
    if (error) {
      response.status(400).json({
        "status": "error",
        "error": error
      })
    }
    response.status(201).json({
      "status": "success",
      "data": {
        "message": "Article Created Successfully",
        "articleId": results.rows[0].articleid,
        "title": title,
        "article": article,
        "authorId": authorId,
        "tag": tag
      }
    })
    console.log(results);
  })
}

const updateArticle = (request, response) => {
  const articleId = parseInt(request.params.id)
  const {  title, article, authorId, tag } = request.body

  db.query(
    'UPDATE articles SET title = $1, article = $2, authorId = $3, tag = $4 WHERE articleId = $5',
    [title, article, authorId, tag, articleId],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Article modified with ID: ${articleId}`)
    }
  )
}

const deleteArticle = (request, response) => {
  const articleId = parseInt(request.params.id)

  db.query('DELETE FROM articles WHERE articleId = $1', [articleId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Article deleted with ID: ${articleId}`)
  })
}

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
}

