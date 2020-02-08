var socket = io();

// on son para escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// emmit Son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Memo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Enviado al servidor: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Mensaje del servidor:', mensaje);
});