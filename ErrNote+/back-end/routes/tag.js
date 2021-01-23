const express = require('express');
const router = express.Router();
const tagController = require('../controllers').tag;

//apelul tuturor functiilor ce apartin tabelei "Tags"
router.get('/', tagController.getTags);
router.post('/postTag', tagController.postTag);
router.delete('/deleteTag/:id', tagController.deleteTag);
router.delete('/deleteAllTags', tagController.deleteAllTags);


module.exports = router;