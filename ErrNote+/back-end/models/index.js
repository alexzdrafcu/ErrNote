//import sequelize
const Sequelize = require('sequelize');
//importul configuratiei bazei de date
const db = require('../config/db');
//importul modelelor bazei de date
const AttachmentModel = require('./attachment');
const CourseModel = require('./course');
const GroupModel = require('./group');
const NoteModel = require('./note');
const TagModel = require('./tag');
const UserModel = require('./user');

//adaugarea modelelor in baza de date
const Attachment = AttachmentModel(db,Sequelize);
const Course = CourseModel(db,Sequelize);
const Group = GroupModel(db,Sequelize);
const Note = NoteModel(db,Sequelize);
const Tag = TagModel(db,Sequelize);
const User = UserModel(db,Sequelize);

//legatura one-to-many intre curs si notite
Course.hasMany(Note, {foreignKey: "courseID"});
Note.belongsTo(Course, {foreignKey: "courseID"});

//legatura many-to-many intre etichete si notite
Tag.belongsToMany(Note, {through: "NotesTags"});
Note.belongsToMany(Tag, {through: "NotesTags"});

//legatura one-to-many intre user si notite
User.hasMany(Note, {foreignKey: "userID"});
Note.belongsTo(User, {foreignKey: "userID"});

//legatura one-to-many intre notita si atasamente
Note.hasMany(Attachment, {foreignKey: "noteID"});
Attachment.belongsTo(Note, {foreignKey: "noteID"});

//legatura many-to-many intre grupuri si notite
Note.belongsToMany(Group, {through: "GroupNotes"});
Group.belongsToMany(Note, {through: "GroupNotes"});

//legatura many-to-many intre grupuri si useri
User.belongsToMany(Group, {through: "GroupUsers"});
Group.belongsToMany(User, {through: "GroupUsers"});

//exportul modelelor bazei de date
module.exports = {
    Attachment,
    Course,
    Group,
    Note,
    Tag,
    User,
    connection: db
}

