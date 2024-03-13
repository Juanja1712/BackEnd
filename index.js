
// 1. Importación de módulos:
    //Se importan los módulos 'express' y 'mongoose'. 'express' es un marco 
    //de aplicación web para Node.js, y 'mongoose' es una biblioteca de 
    //modelado de objetos MongoDB para Node.js.
const express = require('express');
const mongoose = require('mongoose');


// 2. Conexión a la base de datos:
    //Se establece la conexión a la base de datos MongoDB utilizando la URL proporcionada.
mongoose.connect('mongodb+srv://jara171201:1Bn5uRGL8YHcb7Mf@clases.xi4viq3.mongodb.net/');


// 3. Manejo de la conexión a la base de datos:
    //Se define un manejador de eventos para manejar errores de conexión (db.on('error', ...)) 
    //y otro para ejecutar código cuando la conexión se abre con éxito (db.once('open', ...)) 
    //en la función de callback. 
const manageConection = mongoose.connection;
manageConection.on('error', console.error.bind(console, 'connection error:'));

// 4. Definición del esquema del usuario:
manageConection.once('open', () => {

    console.log('Connected to MongoDB');

    userSchema = mongoose.Schema({
        nombres : String,
        apellidos : String
    });
    // Se define el esquema de la colección de usuarios en MongoDB, con dos campos: nombres y apellidos, ambos de tipo String.
    

    // 5. Creación del modelo de usuario:
        // Se crea el modelo User a partir del esquema definido anteriormente.
    const User = mongoose.model('User', userSchema);

    // 6. Configuración de la aplicación Express:
        // Se crea una instancia de la aplicación Express y se habilita el middleware para parsear datos JSON.
    const app = express();
    app.use(express.json());


    // 7. Definición de la ruta para obtener usuarios:
        //Se define una ruta GET (/api/users) que devuelve todos los usuarios almacenados en la base de datos MongoDB.
    app.get('/api/users', async(req, res) => {
        const users = await User.find();
        res.json(users);
    });
    

    // 8. Inicio del servidor Express:
        //Se inicia el servidor Express en el puerto 3000 y se muestra un mensaje en la consola cuando el servidor está escuchando.
    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });

});