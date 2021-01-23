//importul modelelor bazei de date pentru tabelele Groups, Users si Notes
const GroupDB = require('../models').Group;
const UserDB = require('../models').User;
const NoteDB = require('../models').Note;


const controller = {
    //functie get pentru toate grupurile
    getGroups: (req, res) => {
        GroupDB.findAll().then((groups) => {
            res.status(200).send(groups)
        }).catch((err) => res.status(500).send(err))
    },

    //functie post al unui grup
    postGroup: async (req, res) => {
        const group = {
            name: req.body.name
        }
        let errors = [];

        //validare pentru ca numele introdus sa existe
        if (!group.name) {
            errors.push("Empty field!")
        }

        if (errors.length === 0) {
            try {
                //adaugarea grupului nou
                await GroupDB.create({ name: group.name });
                console.log("Group Added");
                res.status(201).send({ message: "Group Added" });
            } catch (err) {
                console.log("Server error");
                res.status(500).send(err);
            }
        } else {
            console.log("Error!");
            res.status(400).send(errors);
        }
    },

    //functie pentru adaugarea unui user in functie de id(userId), intr-un grup cu id = groupId
    addUserToGroup: async (req, res) => {
        try {
            const user = await UserDB.findByPk(req.body.userId);
            const group = await GroupDB.findByPk(req.body.groupId);
            await group.addUser(user);
            res.status(200).send({ message: "User Added To Group" });
        } catch (err) {
            console.log("Server error");
            res.status(500).send(err);
        }

    },

    //functie pentru stergerea unui user in functie de id(userId), dintr-un grup cu id = groupId
    removeUserFromGroup: async (req, res) => {
        try {
            const user = await UserDB.findByPk(req.body.userId);
            const group = await GroupDB.findByPk(req.body.groupId);
            await group.removeUser(user);
            res.status(200).send({ message: "User Removed From Group" });
        } catch (err) {
            console.log("Server error");
            res.status(500).send(err);
        }

    },

    //functie pentru adaugarea unei notite in functie de id(noteId), intr-un grup cu id = groupId
    addNoteToGroup: async (req, res) => {
        try {
            const note = await NoteDB.findByPk(req.body.noteId);
            const group = await GroupDB.findByPk(req.body.groupId);
            await group.addNote(note);
            res.status(200).send({ message: "Note Added To Group" });
        } catch (err) {
            console.log("Server error");
            res.status(500).send(err);
        }

    },

    //functie pentru stergerea unei notite in functie de id(noteId), dintr-un grup cu id = groupId
    removeNoteFromGroup: async (req, res) => {
        try {
            const note = await NoteDB.findByPk(req.body.noteId);
            const group = await GroupDB.findByPk(req.body.groupId);
            await group.removeNote(note);
            res.status(200).send({ message: "Note Removed From Group" });
        } catch (err) {
            console.log("Server error");
            res.status(500).send(err);
        }

    },

    //functie pentru stergerea unui grup in functie de id
    deleteGroup: async (req, res) => {

        await GroupDB.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send({ message: "Group Deleted" });
        })
    },

    //functie pentru stergerea tuturor grupurilor
    deleteAllGroups: async (req, res) => {

        await GroupDB.destroy({
            where: {}
        }).then(() => {
            res.status(200).send({ message: "All Groups Deleted" });
        })
    }
}


module.exports = controller;