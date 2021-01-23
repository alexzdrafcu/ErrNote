//importul functiilor(controller) pentru fiecare tabela in parte
const course = require('./course');
const tag = require('./tag');
const user = require('./user');
const note = require('./note');
const group = require('./group');


const controllers = {
    course,
    tag,
    user,
    note,
    group
}

//exportul tuturor controllerelor
module.exports = controllers;