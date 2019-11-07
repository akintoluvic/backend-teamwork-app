const db = require('../db')

// Get Routes

exports.getPosts = (request, response) => {
    db.query('SELECT * FROM posts ORDER BY createdOn DESC', (error, results) => {
      if (error) {
        response.status(400).json({
          "status": "error",
          "error": error
        })
      }
      response.status(201).json({
        "status": "success",
        "data": {
          "message": "All posts returned successfully",
          "posts": results.rows
        }
      })
    })
  }

  exports.getPostById = (request, response) => {
    const id = parseInt(request.params.id)
  
    db.query('SELECT * FROM articles WHERE articleId = $1', [id], (error, results) => {
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
          "message": `Posts with the id: ${id} returned successfully`,
          "posts": results.rows
        }
      })
    })
  }

  exports.getPostsWithAtag = (request, response) => {
    const { tag } = request.params.tag
    db.query('SELECT * FROM posts WHERE tag = $1 ORDER BY createdOn DESC', [tag], (error, results) => {
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
          "message": `Posts with the tag: ${tag} returned successfully`,
          "posts": results.rows
        }
      })
    })
  }


  // Post Routes

  exports.createArticle = (request, response) => {
    const { title, article, authorId, tag } = request.body
  
    db.query('INSERT INTO posts (title, article, authorId, tag) VALUES ($1, $2, $3, $4) RETURNING postId', [title, article, authorId, tag], (error, results) => {
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
          "articleId": results.rows[0].postid,
          "title": title,
          "article": article,
          "authorId": authorId,
          "tag": tag,
          // "createdOn": results.rows[0].createdOn
        }
      })
    })
  }

  exports.createGif = (request, response) => {
    const { title, imageUrl, authorId, tag } = request.body
  
    db.query('INSERT INTO posts (title, imageUrl, authorId, tag) VALUES ($1, $2, $3, $4) RETURNING postId', [title, imageUrl, authorId, tag], (error, results) => {
      if (error) {
        response.status(400).json({
          "status": "error",
          "error": error
        })
      }
      response.status(201).json({
        "status": "success",
        "data": {
          "message": "Gif Created Successfully",
          "gifId": results.rows[0].postid,
          "title": title,
          "imageUrl": imageUrl,
          "authorId": authorId,
          "tag": tag,
          // "createdOn": results.rows[0].createdOn
        }
      })
    })
  }

  // Delete Routes

  exports.deleteArticle = (request, response) => {
    const articleId = parseInt(request.params.id)
  
    db.query('DELETE FROM posts WHERE postId = $1', [articleId], (error, results) => {
        if (error) {
          response.status(400).json({
            "status": "error",
            "error": error
          })
        }
        
        response.status(201).json({
          "status": "success",
          "data": {
            "message": "Article and comments deleted successfully",
            "articleId": articleId
          }
        })
      }
    )
  }

  exports.deleteGif = (request, response) => {
    const gifId = parseInt(request.params.id)
  
    db.query('DELETE FROM posts WHERE postId = $1', [gifId], (error, results) => {
      if (error) {
        response.status(400).json({
          "status": "error",
          "error": error
        })
      }
      
      response.status(201).json({
        "status": "success",
        "data": {
          "message": "Gif and comments deleted Successfully",
          "gifId": gifId
        }
      })
    })
  }

  // Put Routes

  exports.updateArticle = (request, response) => {
    const articleId = parseInt(request.params.id)
    const {  title, article, tag } = request.body
  
    db.query(
      'UPDATE posts SET title = $1, article = $2, tag = $3 WHERE postId = $4',
      [title, article, tag, articleId],
      (error, results) => {
        if (error) {
          response.status(400).json({
            "status": "error",
            "error": error
          })
        }
        response.status(201).json({
          "status": "success",
          "data": {
            "message": "Article updated Successfully",
            "articleId": results.rows[0].articleid,
            "title": title,
            "article": article,
            "tag": tag
          }
        })
      }
    )
  }