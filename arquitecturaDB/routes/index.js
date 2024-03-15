const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/api/v1/users', userController.getAllUsers);
router.get('/api/v1/edades', userController.edades);

// End point dinamico
router.get('/api/v1/user/id/:id', userController.getUserById); // Los dos puntos antes significan que en lo que esta despues va a ser dinamico
router.get('/api/v1/user/name/:name', userController.getUserByName);

module.exports = router;