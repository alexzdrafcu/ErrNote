//Tabela "Courses" a bazei de date

module.exports = (sequelize, DataType) => {
    return sequelize.define("course", {
        name: DataType.STRING(20)
    })
}