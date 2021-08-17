const conn = require('./conexion.js');
const Sequelize = require('sequelize');

const Orders= conn.define("orders", {
    order_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: Sequelize.DataTypes.TEXT,
    date: Sequelize.DataTypes.DATE,
    description: Sequelize.DataTypes.TEXT,
    payment_method: Sequelize.DataTypes.TEXT,
    total: Sequelize.DataTypes.FLOAT,
    user_id: Sequelize.DataTypes.INTEGER,
    delivery_address: Sequelize.DataTypes.INTEGER
},{});

module.exports = Orders;