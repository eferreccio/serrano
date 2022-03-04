const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/api/categoriesController');

//Rutas

//Listado de categorías
router.get('/', categoriesController.list);

//Agregar una categoría
router.post('/create', categoriesController.create);


module.exports = router;