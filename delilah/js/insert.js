const users = require('./users');
users.create({
    username: 'jose',
    password: 'jose123',
    email: 'jose@gmail.com',
    delivery_address: 'Av.los olivos',
    full_name: 'jose eli',
    phone: 123456789,
    id_admin: 1,
    is_disabled: true
}).then(function(id){
    console.log('Insertado con ID: '+ id.id);
});