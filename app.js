const express = require('express')
const bodyParser = require('body-parser');
const multipart = require("connect-multiparty");                        
const multipartMiddleware = multipart();



// Routes
const userRoutes = require('./routes/users')
const posts = require('./routes/posts')
// const gifs = require('./routes/gifs')
const comments = require('./routes/comments')
// const articles = require('./routes/articles')
const app = express()

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post("/", multipartMiddleware, posts.uploadFile)

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hello World'
    })
    next()
})

// User  
app.use('/auth', userRoutes)

// User posts
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


app.get('/api/v1/', (req, res) => res.send('Base v1 Req success!'))

module.exports = app;