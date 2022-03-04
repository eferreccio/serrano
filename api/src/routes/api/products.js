const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productsController');

//Middlewares

//const uploadFile = require('../../middlewares/multerMiddleware');


//Rutas

//Buscar un producto
router.get('/search', productsController.search);
//Listado de todos los productos
router.get('/', productsController.list);
//Detalle del producto
router.get('/:id', productsController.detail);
//Agregar un producto
router.post('/create',/* uploadFile.single('avatar'),*/ productsController.create);
//Modificar un producto
router.put('/update/:id', productsController.update);
//Eliminar un producto
router.delete('/delete/:id', productsController.destroy);


module.exports = router;