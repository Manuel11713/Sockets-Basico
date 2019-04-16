const { io } = require('../server')


io.on('connection', cliente => { //Detecta cuando un usuario se conecta

    console.log('Usuario Conectado Backend');

    cliente.on('disconnect', () => { //cuando el cliente cierra la pestaña de la pagina
        console.log('Usuario Desconectado');
    });

    //Escuchar al cliente
    cliente.on('enviarMensaje', (data, callback) => { //Escucha a "enviarMensaje"
        console.log(data);

        cliente.broadcast.emit('enviarMensajeBack', data); //con Esto Replicamos los mensajes para todos




        // if (mensaje.usuario) {
        //     callback({
        //         mensaje: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         mensaje: 'TODO SALIO MAL!!!!!'
        //     });
        // }
    });

    //Enviar informacion al cliente
    cliente.emit('enviarMensajeBack', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

});