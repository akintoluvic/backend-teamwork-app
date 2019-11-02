const express = require('express')
const bodyParser = require('body-parser');
const users = require('./routes/userQueries')
const gifs = require('./routes/gifs')
const app = express()


const connectionString = "postgres://postgres:greene@localhost::1/greene-one";

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

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hello World'
    })
    next()
})

app.get('/users', users.getUsers)
app.get('/users/:id', users.getUserById)
app.post('/users', users.createUser)
app.put('/users/:id', users.updateUser)
app.delete('/users/:id', users.deleteUser)

app.get('/gifs', gifs.getGifs)
app.get('/gifs/:id', gifs.getGifById)
app.post('/gifs', gifs.createGif)
// app.put('/gifs/:id', gifs.updateGif)
app.delete('/gifs/:id', gifs.deleteGif)

app.get('/api/v1/', (req, res) => res.send('Base v1 Req success!'))

module.exports = app;