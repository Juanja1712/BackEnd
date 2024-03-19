const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/api/users', userController.getAllUsers);

// End point dinamico
router.get('/api/user/id/:id', userController.getUserById); // Los dos puntos antes significan que en lo que esta despues va a ser dinamico
router.get('/api/user/name/:name', userController.getUserByName);

// Actualizar usuario
router.patch('/api/user/update/:name', userController.updateUser); // Patch porque solo vamos a modificar uno

router.delete('/api/user/delete/:name', userController.deleteUserByName);

module.exports = router;