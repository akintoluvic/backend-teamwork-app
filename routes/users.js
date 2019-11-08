const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');

router.post('/auth/signin', userCtrl.signIn)
router.post('/auth/create-user', userCtrl.createUser)

module.exports = router;