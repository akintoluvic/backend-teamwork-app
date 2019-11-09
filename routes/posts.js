const express = require('express');
const router = express.Router();
const multipart = require("connect-multiparty");                        
const multipartMiddleware = multipart();


const posts = require('../controllers/posts');
const comments = require('../controllers/comments');


router.post('/gifs', multipartMiddleware, posts.createGif)
router.post('/articles', posts.createArticle)
router.post('/articles/:id/comments', comments.createComment) // article comments
router.post('/gifs/:id/comments', comments.createComment) // gif comments

router.delete('/articles/:id', posts.deleteArticle)
router.delete('/gifs/:id', posts.deleteGif)


router.get('/feed', posts.getPosts) // feed
router.get('/articles/:id', posts.getPostById) // single article
router.get('/gifs/:id', posts.getPostById) // single gif
router.get('/feed/tags/:tag', posts.getPostsWithAtag) // articles with a tag

// router.put('/users/:id', users.updateUser)
// router.put('/gifs/:id', gifs.updateGif)
router.put('/articles/:id', posts.updateArticle)
router.put('/gifs/:id', posts.updateGif)



// // Potential Routes

// router.get('/users', users.getUsers)
// router.get('/users/:id', users.getUserById)
// router.delete('/users/:id', users.deleteUser)

// router.get('/gifs', gifs.getGifs)
// // router.put('/gifs/:id', gifs.updateGif)

// router.get('/comments', comments.getComments)
// router.get('/comments/:id', comments.getCommentById)
// router.delete('/comments/:id', comments.deleteComment)


module.exports = router;