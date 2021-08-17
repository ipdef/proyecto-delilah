const Sequelize = require('sequelize');
const path = 'delilah';
//nombre de la base de datos, usuario, contraseña, opciones
const conn = new Sequelize(path,'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

conn.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
}).finally(() => {
    conn.close();
});

module.exports = conn;