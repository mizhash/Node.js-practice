var eventEmitter = require('events').EventEmitter;
var counter = 0;


var em = new eventEmitter();

var timers = setInterval(function() {
	em.emit('timed', counter++);
}, 3000);

em.on('timed', function(data) {
	console.log('timed ' + data);
	if(counter >= 10) {
		clearInterval(timers);
	}
});



