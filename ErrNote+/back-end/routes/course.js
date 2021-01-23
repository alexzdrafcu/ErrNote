const express = require('express');
const router = express.Router();
const courseController = require('../controllers').course;

//apelul tuturor functiilor ce apartin tabelei "Courses"
router.get('/', courseController.getCourses);
router.post('/postCourse', courseController.postCourse);
router.delete('/deleteCourse/:id', courseController.deleteCourse);
router.delete('/deleteAllCourses', courseController.deleteAllCourses);



module.exports = router;