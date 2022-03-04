const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/usersController');

//Rutas

//Show
router.get('/', usersController.list);

//Login
router.post('/login', usersController.login);

//Register
router.post('/register', usersController.register);


module.exports = router;