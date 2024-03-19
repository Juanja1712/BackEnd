const User = require('../models/userModel');

const userController = {
    // Obtener todos los usuarios
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);

        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener un usuario por su id dinamicamente
    getUserById: async (req, res) => {

        // Recibir el parametro de una red dinamica
        const id = req.params.id; // Hacemos una peticion params para recibir el id y guardarlo en una constante

        try {
            const userId = await User.findById(id);
            res.json(userId);

        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        };
    },

    // Obtener un usuario por su  dinamicamente
    getUserByName: async (req, res) => {


        const name = req.params.name

        try {
            const userName = await User.findOne({name: name});
            res.json(userName);

        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        };
    },

    // Crear un nuevo usuario
    createUser: async (req, res) => {
        const userData = req.body;
        try {
            const newUser = new User(userData);
            const savedUser = await newUser.save();
            res.status(201).json(savedUser); // Status 201 porque

        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar un usuario

    updateUser: async (req, res) => {
        try {
            const {name} = req.params;
            const userUpdate = await User.findOneAndUpdate({name: name}, {$set: {name: 'Arnulfo'}})
            res.json(userUpdate);

        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    deleteUserByName: async (req, res) => {
        try { 
            const {name} = req.params;
            const userDelete = await User.findOneAndDelete({name:name})
            res.json(userDelete);

        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Otros métodos para manejar otras solicitudes relacionadas con los usuarios (actualizar, eliminar, etc.)
};

module.exports = userController;