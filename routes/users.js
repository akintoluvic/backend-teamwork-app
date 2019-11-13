const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/users');
const auth = require('../middleware/auth');

router.post('/signin', userCtrl.signIn);
router.post('/create-user', auth, userCtrl.createUser);
router.put('/update-profile', auth, userCtrl.updateUser);
router.get('/profile/:id', auth, userCtrl.getProfile);

module.exports = router;
