const CourseDB = require('../models').Course;

const controller = {
    //functie get pentru toate cursurile
    getCourses: (req, res) => {
        CourseDB.findAll().then((courses) => {
            res.status(200).send(courses)
        }).catch((err) => res.status(500).send(err))
    },

    //functie post a unui curs
    postCourse: async (req, res) => {
        const course = {
            name: req.body.name
        }
        let errors = [];

        //validare pentru ca numele introdus sa existe
        if (!course.name) {
            errors.push("Empty field!")
        }

        if (errors.length === 0) {
            try {
                //adaugarea cursului nou
                await CourseDB.create({ name: course.name });
                console.log("Course Added");
                res.status(201).send({ message: "Course Added" });
            } catch (err) {
                console.log("Server error");
                res.status(500).send(err);
            }
        } else {
            console.log("Error!");
            res.status(400).send(errors);
        }
    },

    //functie pentru stergerea unui curs in functie de un id dat in path
    deleteCourse: async (req, res) => {

        await CourseDB.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send({ message: "Course Deleted" });
        })
    },

    //functie pentru stergerea tuturor cursurilor din baza de date
    deleteAllCourses: async (req, res) => {

        await CourseDB.destroy({
            where: {}
        }).then(() => {
            res.status(200).send({ message: "All Courses Deleted" });
        })
    }
}

module.exports = controller;