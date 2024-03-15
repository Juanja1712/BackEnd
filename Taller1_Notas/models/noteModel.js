const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    name: String,
    note: Number
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;