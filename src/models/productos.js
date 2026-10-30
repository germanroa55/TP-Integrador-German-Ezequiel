const { DataTypes } = require('sequelize');
const sequelize = require('.//sequelize');

const Producto = sequelize.define('Producto', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    precio: { type: DataTypes.FLOAT, allowNull: false },
    categoria: { type: DataTypes.STRING, allowNull: false },
    imagen: { type: DataTypes.STRING, allowNull: true },
    activo: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = Producto;