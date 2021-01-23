const express = require('express');
const router = express.Router();
const groupController = require('../controllers').group;

//apelul tuturor functiilor ce apartin tabelei "Groups"
router.get('/', groupController.getGroups);
router.post('/postGroup', groupController.postGroup);
router.post('/addUserToGroup', groupController.addUserToGroup);
router.post('/addNoteToGroup', groupController.addNoteToGroup);
router.delete('/deleteGroup/:id', groupController.deleteGroup);
router.delete('/deleteAllGroups', groupController.deleteAllGroups);
router.delete('/removeUserFromGroup', groupController.removeUserFromGroup);
router.delete('/removeNoteFromGroup', groupController.removeNoteFromGroup);



module.exports = router;