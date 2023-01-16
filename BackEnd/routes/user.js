const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.js');
const auth = require('../middleware/auth.js');
const password = require('../middleware/password.js');

router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getOneUser);
router.post('/signup', password, userCtrl.signup);
router.get('/profil', auth, userCtrl.getOneUser)

// Probleme sur l'authentification à TODO
router.post('/login', userCtrl.login);

module.exports = router;