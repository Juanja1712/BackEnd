const mongoose = require('mongoose');
let User

const connectDatabase = async () => {
    try {
        if (!User) {
            User = mongoose.model('User', require('../models/userModel').schema);
        }

        await mongoose.connect('mongodb+srv://alberto:riwi@riwi.toyicbg.mongodb.net/')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.error(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await User.deleteMany(); 

        const usersData = [
            {
                name: 'Juan',
                email: 'juan@gmail.com',
                password: 'Londres',
            },
            {
                name: 'Adriana',
                email: 'maria@hotmail.com',
                password: 'París',
            },
        ];

        await User.insertMany(usersData);
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;