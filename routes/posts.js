const express = require('express');

const router = express.Router();
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart();

const auth = require('../middleware/auth');
const posts = require('../controllers/posts');
const comments = require('../controllers/comments');

router.post('/gifs', auth, multipartMiddleware, posts.createGif);
router.post('/articles', auth, posts.createArticle);
router.post('/articles/:id/comment', auth, comments.createComment); // article comments
router.post('/gifs/:id/comment', auth, comments.createComment); // gif comments

router.delete('/articles/:id', auth, posts.deleteArticle);
router.delete('/gifs/:id', auth, posts.deleteGif);

router.get('/feed', auth, posts.getPosts); // feed
router.get('/articles/:id', auth, posts.getPostById); // single article
router.get('/gifs/:id', auth, posts.getPostById); // single gif
router.get('/feed/tags/:tag', auth, posts.getPostsWithAtag); // articles with a tag
router.get('/feed/tags/', auth, posts.getAllTags); // articles with a tag

// router.put('/users/:id', users.updateUser)
// router.put('/gifs/:id', gifs.updateGif)
router.put('/articles/:id', auth, posts.updateArticle);
router.put('/gifs/:id', auth, posts.updateGif);

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
