var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function () {
	console.log('Alarm has been triggered!');
}

var fn911 = function () {
	console.log('Call 911!');
}
eventEmitter
	.on('call', fn)
	.on('call', fn911);

eventEmitter.emit('call');
