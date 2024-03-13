
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jara171201:1Bn5uRGL8YHcb7Mf@clases.xi4viq3.mongodb.net/');

const manageConection = mongoose.connection;
manageConection.on('error', console.error.bind(console, 'connection error:'));

manageConection.once('open', () => {

    console.log('Connected to MongoDB');

    userSchema = mongoose.Schema({
        nombres : String,
        apellidos : String,
        correo : String,
        edad : Number
    });  

    const persona = mongoose.model('persona', userSchema);

    const app = express();
    app.use(express.json());

    app.get('/api/personas', async(req, res) => {
        const personas = await persona.find();
        res.json(personas);
    });
    
    app.listen(3001, () => {
        console.log('Example app listening on port 3001!');
    });

     app.get('/api/buscador', async (req, res) => {
        const personas = await persona.find({ edad: { $eq: 30}});
        res.json(personas);
        console.log(personas);
    });
    
    // Los que no tienen 20 años
     app.get('/api/ejercicio-1', async (req, res) => {
        const personas = await persona.find({ edad: { $en: 20}});
        res.json(personas);
        console.log(personas);
    })

    // Mayor que
     app.get('/api/ejercicio-2', async (req, res) => {
        const personas = await persona.find({ edad: { $gt: 20}});
        res.json(personas);
        console.log(personas);
    })

    // Menor que 
     app.get('/api/ejercicio-3', async (req, res) => {
        const personas = await persona.find({ edad: { $lt: 20}});
        res.json(personas);
        console.log(personas);
    })

    // Mayor o igual que
     app.get('/api/ejercicio-4', async (req, res) => {
        const personas = await persona.find({ edad: { $gte: 20}});
        res.json(personas); 
        console.log(personas);
    })

    // Menor o igual que
     app.get('/api/ejercicio-5', async (req, res) => {
        const personas = await persona.find({ edad: { $lte: 20}});
        res.json(personas);
        console.log(personas);
    })

    // Buscar conincidencias entre los parametros recibidos
     app.get('/api/ejercicio-6', async (req, res) => {
        const personas = await persona.find({ edad: { $in: [5, 10, 15]}});
        res.json(personas);
        console.log(personas);
    })

    // Traer todos los datos, menos los indicados en los parameteros del array
     app.get('/api/ejercicio-7', async (req, res) => {
        const personas = await persona.find({ edad: { $nin: [5, 10, 15]}});
        res.json(personas);
        console.log(personas);
    })

    // Se utiliza para buscar documentos donde un campo especifico existe o no existe
    app.get('/api/ejercicio-8', async (req, res) => {
        const personas = await persona.find({ edad: { $nin: [5, 10, 15]}});
        res.json(personas);
        console.log(personas);
    })
});
    
    