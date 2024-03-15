const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/api/notes', noteController.getAlLNotes);
router.post('/api/notes', noteController.createNote);
router.get('/api/note/id/:id', noteController.getNoteById);

module.exports = router;