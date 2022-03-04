const express = require('express');
const router = express.Router();
const ordersController = require('../../controllers/api/ordersController');

//Middlewares


//Rutas

router.get('/', ordersController.list);
router.post('/create', ordersController.create);


module.exports = router;   