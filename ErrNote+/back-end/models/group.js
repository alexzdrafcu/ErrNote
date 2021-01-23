//Tabela "Groups" a bazei de date

module.exports = (sequelize, DataType) => {
    return sequelize.define("group", {
        name: DataType.STRING(20)
    })
}