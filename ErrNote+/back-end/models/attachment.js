//Tabela "Attachments" a bazei de date

module.exports = (sequelize, DataType) => {
    return sequelize.define("attachment", {
        name: DataType.STRING(20),
        path: DataType.STRING(200)
    })
}