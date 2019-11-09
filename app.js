const express = require('express')
const bodyParser = require('body-parser');
const multipart = require("connect-multiparty");                        
const multipartMiddleware = multipart();



// Routes
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
// const gifs = require('./routes/gifs')
const commentRoutes = require('./routes/comments')
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
app.use('/api/v1', multipartMiddleware, posts.createGif)

app.get('/api/v1/', (req, res) => res.send('Base v1 Req success!'))

module.exports = app;