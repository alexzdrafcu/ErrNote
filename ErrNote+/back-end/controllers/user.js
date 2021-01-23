const UserDB = require('../models').User;
const bcrypt = require('bcryptjs');

const controller = {
    //functie get pentru toti utilizatorii
    getUsers: (req, res) => {
        UserDB.findAll().then((users) => {
            res.status(200).send(users)
        }).catch((err) => res.status(500).send(err))
    },

    //functie post pentru adaugarea unui utilizator nou in baza de date
    postUser: async (req, res) => {
        const user = {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password
        }
        let errors = [];

        //validare pentru ca toate campurile introduse sa existe
        if (!user.lastName || !user.firstName || !user.email || !user.password) {
            errors.push("Empty field!")
        }

        //validare pentru ca adresa de email sa contina @stud.ase.ro
        if (!user.email.includes("@stud.ase.ro")) {
            errors.push("Wrong email format!");
        }

        //validare pentru ca parola sa fie mai lunga de 8 caractere
        if (user.password.length < 8) {
            errors.push("Password too weak!")
        }

        if (errors.length === 0) {
            try {
                let hashedPassword = await bcrypt.hash(user.password, 10)
                //adaugarea utilizatorului in baza de date
                await UserDB.create({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: hashedPassword
                });
                console.log("User Added");
                res.status(201).send({ message: "User Added" });
            } catch (err) {
                console.log("Server error");
                res.status(500).send(err);
            }
        } else {
            console.log("Error!");
            res.status(400).send(errors);
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await UserDB.findOne({ where: { email } });
            if (!user) {
                res.send({ ok: false, msg: "Password/email combination does not match" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.send({ ok: false, msg: "Password/email combination does not match" });
            }
            res.status(200).send({ ok: true, user: user });
        } catch (error) {
            console.log(error);
        }
    },

    //funtie pentru modificarea userului existent din baza de date
    updateUser: async (req, res) => {
        const user = {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password
        }
        let errors = [];

        //validare pentru ca toate campurile introduse sa existe
        if (!user.lastName || !user.firstName || !user.email || !user.password) {
            errors.push("Empty field!")
        }

        //validare pentru ca adresa de email sa contina @stud.ase.ro
        if (!user.email.includes("@stud.ase.ro")) {
            errors.push("Wrong email format!");
        }

        //validare pentru ca parola sa fie mai lunga de 8 caractere
        if (user.password.length < 8) {
            errors.push("Password too weak!")
        }

        if (errors.length === 0) {
            try {
                //gasirea utilizatorului dupa id si modificarea acestuia
                let newUser = await UserDB.findByPk(req.params.id);
                newUser.firstName = user.firstName;
                newUser.lastName = user.lastName;
                newUser.email = user.email;
                let hashedPassword = await bcrypt.hash(user.password, 10);
                newUser.password = hashedPassword;
                await newUser.save();
                console.log("User Added");
                res.status(201).send({ message: "User Added" });
            } catch (err) {
                console.log("Server error");
                res.status(500).send(err);
            }
        } else {
            console.log("Error!");
            res.status(400).send(errors);
        }
    },

    updatePassword: async (req, res) => {
        const user = {
            password: req.body.password
        }
        let errors = [];

        //validare pentru ca toate campurile introduse sa existe
        if (!user.password) {
            errors.push("Empty field!")
        }
        //validare pentru ca parola sa fie mai lunga de 8 caractere
        if (user.password.length < 8) {
            errors.push("Password too weak!")
        }
        if (errors.length === 0) {
            try {
                //gasirea utilizatorului dupa id si modificarea acestuia
                let newUser = await UserDB.findByPk(req.params.id);
                let hashedPassword = await bcrypt.hash(user.password, 10)
                newUser.password = hashedPassword;
                await newUser.save();
                console.log("Password Changed");
                res.status(201).send({ message: "Password Changed" });
            } catch (err) {
                console.log("Server error");
                res.status(500).send(err);
            }
        } else {
            console.log("Error!");
            res.status(400).send(errors);
        }
    },
    //functie pentru stergerea unui utilizator in functie de id
    deleteUser: async (req, res) => {
        await UserDB.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send({ message: "User Deleted" });
        })
    },

    //stergerea tuturor utilizatorilor
    deleteAllUsers: async (req, res) => {
        await UserDB.destroy({
            where: {}
        }).then(() => {
            res.status(200).send({ message: "All Users Deleted" });
        })
    }
}

module.exports = controller;