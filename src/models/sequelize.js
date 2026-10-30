const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("mysql://root:526481200@localhost:3306/TP-integrador");
module.exports = sequelize;