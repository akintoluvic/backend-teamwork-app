const express = require('express')
const bodyParser = require('body-parser');

// Routes
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')

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

// app.post("/", multipartMiddleware, posts.uploadFile)

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hello World'
    })
    next()
})

app.use('/auth', userRoutes)
app.use('/api/v1', postRoutes)


module.exports = app;