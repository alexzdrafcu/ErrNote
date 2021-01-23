const express = require('express');
const router = express.Router();

//crearea rutelor pentru tabela "Courses"
const courseRouter = require('./course');
router.use('/courses', courseRouter);

//crearea rutelor pentru tabela "Tags"
const tagRouter = require('./tag');
router.use('/tags', tagRouter);

//crearea rutelor pentru tabela "Users"
const userRouter = require('./user');
router.use('/users', userRouter);

//crearea rutelor pentru tabela "Notes"
const noteRouter = require('./note');
router.use('/notes', noteRouter);

//crearea rutelor pentru tabela "Groups"
const groupRouter = require('./group');
router.use('/groups', groupRouter);

module.exports = router;