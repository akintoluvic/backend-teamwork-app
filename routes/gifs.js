const db = require('../db')

const getGifs = (request, response) => {
  db.query('SELECT * FROM gifs ORDER BY gifId ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getGifById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM gifs WHERE gifId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createGif = (request, response) => {
  const { title, imageUrl, authorId, tag } = request.body

  db.query('INSERT INTO gifs (title, imageUrl, authorId, tag) VALUES ($1, $2, $3, $4)', [ title, imageUrl, authorId, tag ], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Gif uploaded with ID: ${results.id}`)
    console.log(results);
  })
}

// const updateUser = (request, response) => {
//   const userId = parseInt(request.params.id)
//   const { firstName, lastName } = request.body

//   db.query(
//     'UPDATE users SET firstName = $1, lastName = $2 WHERE userId = $3',
//     [firstName, lastName, userId],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${userId}`)
//     }
//   )
// }

const deleteGif = (request, response) => {
  const gifId = parseInt(request.params.id)

  db.query('DELETE FROM gifs WHERE gifId = $1', [gifId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${gifId}`)
  })
}

module.exports = {
  getGifs,
  getGifById,
  createGif,
//   updateUser,
  deleteGif,
}

