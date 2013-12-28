var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8081);

io.sockets.on('connection', function (socket) {
	
	socket.on('the_message_from_client', function(data) {
		console.log(data) // wypisz na konsole
	});
	
	// kiedy zajdzie zdarzenie:
	socket.emit('the_message_from_server', {
		atrybut1: "wartosc1",
		atrybut2: 12345,
	})
	
});
