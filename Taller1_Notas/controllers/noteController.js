const Note = require('../models/noteModel');

const noteController = {

    getAlLNotes: async (req, res) =>{
        try {            
            const notes = await Note.find({note: {$exists: true}});
            res.json(notes);

        } catch (error) {
            console.error('Error getting all notes', error);
            res.status(500).json({message: 'Internal error'})
        };
    },

    getNoteById: async (req, res) => {

        const id = req.params.id;

        try {
            const noteId = await Note.findById(id);
            res.json(noteId);

        } catch (error) {
            console.error('Error getting all notes', error);
            res.status(500).json({message: 'Internal error'})
        }
    },

    createNote: async (req, res) => {
        const notesData = req.body;
        try {
            const newNote = new Note(notesData);
            const savedNote = await newNote.save();
            res.status(201).json(savedNote); // Status 201 porque estamos creando algo
        } catch (error) {
            console.error('Error creating note', error);
            res.status(500).json({message: 'Internal error'})
        }
    }

};

module.exports = noteController;