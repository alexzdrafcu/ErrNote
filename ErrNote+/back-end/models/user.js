//Tabela "Users" a bazei de date

module.exports = (sequelize, DataType) => {
    return sequelize.define("user", {
        lastName: DataType.STRING(20),
        firstName: DataType.STRING(20),
        email: DataType.STRING(30),
        password: DataType.STRING(255)
    })
}