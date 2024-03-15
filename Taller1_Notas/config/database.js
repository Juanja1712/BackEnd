const mongoose = require('mongoose');
let Note

const connectDatabase = async () => {
    try {
        
        if (!Note) {
            Note = mongoose.model('Note', require('../models/noteModel').schema);
        }

        await mongoose.connect('mongodb+srv://alberto:riwi@riwi.toyicbg.mongodb.net/')
        .then( () => console.log('Connection established'))
        .catch(err => console.error(err));

        await runData();

    } catch (error) {
        
        console.error('Error connecting to the database: ', error);
        process.exit(1);
    }
};

const runData = async () => {
    try {
        await Note.deleteMany();

        const userData = [
            {
                name: 'NOTA 1',
                note: 10
            },
            {
                name: 'NOTA 2',
                note: 8
            }
        ]

        await Note.insertMany(userData);
        console.log('Data inserted');

    } catch (error) {
        console.error('Error inserting data into the database: ', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;