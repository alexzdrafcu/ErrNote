const express = require('express');
const router = express.Router();
const userController = require('../controllers').user;

//apelul tuturor functiilor ce apartin tabelei "Users"
router.get('/', userController.getUsers);
router.post('/postUser', userController.postUser);
router.post('/login', userController.login);
router.delete('/deleteUser/:id', userController.deleteUser);
router.delete('/deleteAllUsers', userController.deleteAllUsers);
router.put('/updateUser/:id', userController.updateUser);
router.put('/updatePassword/:id', userController.updatePassword);

module.exports = router;