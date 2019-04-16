//Funciones que queremos cuando se disparen funciones al servidor
var socket = io();

//socket.on = Escuchar Sucesos
socket.on('connect', function() { //funcion que detecta cuando nos conectamos al servidor
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() { //cuando se cae el servidor
    console.log('Perdimos conexión con el servidor');
});


//Socket.emit = Enviar Información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo Front-End'
}, function(respuesta) { //Creamos un callback que nos de FeedBack
    console.log('Respuesta Server', respuesta);
});

//Escuchamos informacion del servidor
socket.on('enviarMensajeBack', function(mensaje) { //Escucha a 'enviarMensajeBack'
    console.log('Servidor', mensaje);
});