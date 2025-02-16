const Sequelize = require('sequelize');
const database = require('./db');

const cardapio = database.define('cardapio', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    produto: {
        type: Sequelize.STRING,
        allowNull: false
    },

    detalhes: {
        type: Sequelize.STRING,
        allowNull: false
    },

    preco: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }
},
    {
        timestamps: true
    });

    module.exports = cardapio;