const NoteDB = require('../models').Note;

const controller = {
    //functie get pentru toate notitele
    getNotes: (req, res) => {
        NoteDB.findAll().then((notes) => {
            res.status(200).send(notes)
        }).catch((err) => res.status(500).send(err))
    },

    
    getUsersNotes: (req, res) => {
        let arr = [];
        NoteDB.findAll().then((notes) => {
            notes.forEach(element => {
                if(element.userID == req.params.id)
                    arr.push(element)
            });
            res.status(200).send(arr)
        }).catch((err) => res.status(500).send(err))
    },

    getNoteById: (req, res) => {
        let arr = [];
        NoteDB.findAll().then((notes) => {
            notes.forEach(element => {
                if(element.id == req.params.id)
                    arr.push(element)
            });
            res.status(200).send(arr)
        }).catch((err) => res.status(500).send(err))
    },

    //functie post a unei notite
    postNote: async (req, res) => {
        const note = {
            title: req.body.title,
            content: req.body.content,
            courseID: req.body.courseID,
            userID: req.body.userID
        }
        let errors = [];

        //validare pentru ca toate campurile introduse sa existe
        if (!note.title || !note.content || !note.courseID || !note.userID) {
            errors.push("Empty field!")
        }

        if (errors.length === 0) {
            try {
                //adaugarea noii notite in baza de date
                await NoteDB.create({ 
                    title: note.title,
                    content: note.content,
                    courseID: note.courseID,
                    userID: note.userID
                 });
                 
                
                console.log("Note Added");
                res.status(201).send({ message: "Note Added" });
            } catch (err) {
                console.log("Server error");
                res.status(500).send(err);
            }
        } else {
            console.log("Error!");
            res.status(400).send(errors);
        }
    },

    //functie pentru modificarea unei notite existente
    updateNote: async (req, res) => {
        const note = {
            title: req.body.title,
            content: req.body.content,
            courseID: req.body.courseID,
            userID: req.body.userID
        }
        let errors = [];

        
        //validare pentru ca toate campurile introduse sa existe
        if (!note.title || !note.content || !note.courseID || !note.userID) {
            errors.push("Empty field!")
        }

        if (errors.length === 0) {
            try {
                //gasirea notitei dupa id si modificarea acesteia
                let newNote = await NoteDB.findByPk(req.params.id);
                newNote.title = note.title;
                newNote.content = note.content;
                newNote.courseID = note.courseID;
                newNote.userID = note.userID;
                //salvarea actualizarilor
                await newNote.save();
                console.log("Note Updated");
                res.status(201).send({ message: "Note Updated!" });
            } catch (err) {
                console.log("Server error");
                res.status(500).send(err);
            }
        } else {
            console.log("Error!");
            res.status(400).send(errors);
        }
    },

    //functie pentru stergerea unei notite 
    deleteNote: async (req, res) => {

        await NoteDB.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send({ message: "Note Deleted" });
        })
    },

    //functie pentru stergerea tuturor notitelor
    deleteAllNotes: async (req, res) => {

        await NoteDB.destroy({
            where: {}
        }).then(() => {
            res.status(200).send({ message: "All Notes Deleted" });
        })
    }
}

module.exports = controller;