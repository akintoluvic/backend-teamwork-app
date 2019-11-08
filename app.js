const express = require('express')
const bodyParser = require('body-parser');
const fs = require("fs");
const cloudinary = require('cloudinary').v2;
const multipart = require("connect-multiparty");                        
const multipartMiddleware = multipart();
// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: 'viicioouous',
  api_key: '916525649235799',
  api_secret: 'HZQ8-nMxR_CWn6H02GpYW4g_z8I'
});
// cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});



const users = require('./routes/users')
const posts = require('./routes/posts')
// const gifs = require('./routes/gifs')
const comments = require('./routes/comments')
// const articles = require('./routes/articles')
const app = express()

app.post("/", multipartMiddleware, function(req,res) {
  let filename = req.files.dataFile.path;
  cloudinary.uploader.upload(filename,{ tags: "gotemps",resource_type: "auto" })
    .then(function(file) {
      console.log("Public id of the file is  " + file.public_id);
      console.log("Url of the file is  " + file.url);/* Below variable template is part of my project and I have removed some of the unnecessary code so instead of template use whatever fits your situation */template.dataFile=file.url;  //save the url to your model                            template.save(); //save the model as you have changed it        res.redirect("/templates");
    })
    .catch(function(err) {                                                                  
      if (err) {
        console.warn(err);
      }
    });
    res.redirect("/templates"); 
})

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

// User  
app.post('auth/signin', users.signIn)
app.post('auth/create-user', users.createUser)

// User posts
app.post('/gifs', posts.createGif)
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