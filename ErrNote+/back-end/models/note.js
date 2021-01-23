//Tabela "Notes" a bazei de date

module.exports = (sequelize, DataType) => {
    return sequelize.define("note", {
        title: DataType.STRING(20),
        content: DataType.STRING(20000),
    })
}