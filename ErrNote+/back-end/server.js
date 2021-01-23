const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./models').connection;
const router = require('./routes');
const jwt = require('jsonwebtoken');

const app = express();
let port = 8081;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Server is running on " + port);
})

app.get('/reset', (req,res) => {
    connection.sync({force: true}).then(() => {
        res.status(200).send({message: "Database reset"})
    }).catch(() => {
        res.status(500).send({message: "Server error"})
    })
})

app.use('/api', router);
