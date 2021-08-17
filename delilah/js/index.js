const cons = require('./conexion');
const users = require('./users');

const express = require('express');
const server = express();

server.use(express.json());

server.listen(3000, () => {
    console.log('Servidor iniciando...');
});

//Agregar usuarios
server.post('/register', async function(req, res){
    var Users = await users.create ({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        delivery_address: req.body.delivery_address,
        full_name: req.body.full_name,
        phone: req.body.phone,
        id_admin: req.body.id_admin,
        is_disabled: req.body.is_disabled
    })
    .then(function(createdusers) {
        res.send(createdusers),
        console.log(createdusers);
    })
    .catch((error) => console.error(error));
});


// users.findAll({
//     raw: true,
//     where: {
//         username: 'yadhira'   //solo trae el campo almacenado kansas
//     }
// }).then(function(id){
//     console.log(id)
// });