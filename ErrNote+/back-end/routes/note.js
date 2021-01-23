const express = require('express');
const router = express.Router();
const noteController = require('../controllers').note;

//apelul tuturor functiilor ce apartin tabelei "Notes"
router.get('/', noteController.getNotes);
router.post('/postNote', noteController.postNote);
router.delete('/deleteNote/:id', noteController.deleteNote);
router.delete('/deleteAllNotes', noteController.deleteAllNotes);
router.put('/updateNote/:id', noteController.updateNote);
router.get('/getUsersNotes/:id', noteController.getUsersNotes);
router.get('/getNoteById/:id', noteController.getNoteById);


module.exports = router;