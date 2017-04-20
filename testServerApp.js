var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
	console.log('Запрос');

	response.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
	response.end('Привет');
});

server.on('connection', function() {
	console.log('Подключение');
});

server.listen(8124, function() {
	console.log('Запуск сервера');
});

console.log('Сервер запущен на порту 8124');