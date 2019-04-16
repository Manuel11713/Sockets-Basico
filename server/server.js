const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http'); //s necesita para Socket.io


const app = express();
let server = http.createServer(app); //configuraciones para Socket.io


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


//io esta es la comunicacion del Backend
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);
});