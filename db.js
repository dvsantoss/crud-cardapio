const Sequelize = require('sequelize');
const sequelize = new Sequelize('cardapio','root','daviD3v', {
dialect: 'mysql',
host: 'localhost',
port: 3306
})

module.exports = sequelize;