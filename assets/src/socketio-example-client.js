var socket = io.connect('192.168.0.1:8081');

socket.on('the_message_from_server', function(data) {
	console.log(data) // wypisz na konsole
}

// kiedy zajdzie zdarzenie:
socket.emit('the_message_from_client', {
	atrybut1: "wartosc1",
	atrybut2: 12345,
})
