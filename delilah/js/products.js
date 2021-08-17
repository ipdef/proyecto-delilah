const conn = require('./conexion.js');
const Sequelize = require('sequelize');

const Products = conn.define("products ", {
    product_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.DataTypes.TEXT,
    price: Sequelize.DataTypes.FLOAT,
    img_url: Sequelize.DataTypes.STRING,
    description: Sequelize.DataTypes.TEXT,
    is_disable: Sequelize.DataTypes.INTEGER
},{});

module.exports = Products;