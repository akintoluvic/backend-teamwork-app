const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');


app.post('/gifs', multipartMiddleware, posts.createGif)
app.post('/articles', posts.createArticle)
app.post('/articles/:id/comments', comments.createComment) // article comments
app.post('/gifs/:id/comments', comments.createComment) // gif comments

app.delete('/articles/:id', posts.deleteArticle)
app.delete('/gifs/:id', posts.deleteGif)


app.get('/feed', posts.getPosts) // feed
app.get('/articles/:id', posts.getPostById) // single article
app.get('/gifs/:id', posts.getPostById) // single gif
app.get('/feed/tags/:tag', posts.getPostsWithAtag) // articles with a tag

// app.put('/users/:id', users.updateUser)
// app.put('/gifs/:id', gifs.updateGif)
app.put('/articles/:id', posts.updateArticle)



// // Potential Routes

// app.get('/users', users.getUsers)
// app.get('/users/:id', users.getUserById)
// app.delete('/users/:id', users.deleteUser)

// app.get('/gifs', gifs.getGifs)
// // app.put('/gifs/:id', gifs.updateGif)

// app.get('/comments', comments.getComments)
// app.get('/comments/:id', comments.getCommentById)
// app.delete('/comments/:id', comments.deleteComment)


module.exports = router;