const TagDB = require('../models').Tag;

const controller = {
    //functie get pentru toate etichetele
    getTags: (req, res) => {
        TagDB.findAll().then((tags) => {
            res.status(200).send(tags)
        }).catch((err) => res.status(500).send(err))
    },


    //functie post pentru adaugarea unei etichete
    postTag: async (req, res) => {
        const tag = {
            name: req.body.name
        }
        let errors = [];

        //validare pentru ca numele introdus sa existe
        if (!tag.name) {
            errors.push("Empty field!")
        }

        if (errors.length === 0) {
            try {
                //adaugarea noii etichete in baza de date
                await TagDB.create({ name: tag.name });
                console.log("Tag Added");
                res.status(201).send({ message: "Tag Added" });
            } catch (err) {
                console.log("Server error");
                res.status(500).send(err);
            }
        } else {
            console.log("Error!");
            res.status(400).send(errors);
        }
    },

    //functie pentru stergerea unei etichete in functie de id
    deleteTag: async (req, res) => {

        await TagDB.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send({ message: "Tag Deleted" });
        })
    },

    //functie pentru stergerea tuturor etichetelor
    deleteAllTags: async (req, res) => {
        await TagDB.destroy({
            where: {}
        }).then(() => {
            res.status(200).send({ message: "All Tags Deleted" });
        })
    }
}

module.exports = controller;