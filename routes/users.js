const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');

router.post('/signin', userCtrl.signIn)
router.post('/create-user', userCtrl.createUser)

module.exports = router;