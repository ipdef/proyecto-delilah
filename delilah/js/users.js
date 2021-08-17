const conn = require('./conexion.js');
const Sequelize = require('sequelize');

const Users = conn.define("users", {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.DataTypes.TEXT,
    password: Sequelize.DataTypes.TEXT,
    email: Sequelize.DataTypes.TEXT,
    delivery_address: Sequelize.DataTypes.TEXT,
    full_name: Sequelize.DataTypes.TEXT,
    phone: Sequelize.DataTypes.INTEGER,
    id_admin: Sequelize.DataTypes.INTEGER,
    is_disabled: Sequelize.DataTypes.BOOLEAN
},{});

module.exports = Users;