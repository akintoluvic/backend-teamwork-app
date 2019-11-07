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


