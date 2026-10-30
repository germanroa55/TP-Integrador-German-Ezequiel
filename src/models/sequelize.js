const { Sequelize } = require('sequelize');
// Instanciamos la conexión a tu base de datos
const sequelize = new Sequelize('mysql://root:123456@localhost:3306/TP-integrador');
// Ahora sí exportamos la instancia creada
module.exports = sequelize;