//Tabela "Tags" a bazei de date

module.exports = (sequelize, DataType) => {
    return sequelize.define("tag", {
        name: DataType.STRING(20)
    })
}