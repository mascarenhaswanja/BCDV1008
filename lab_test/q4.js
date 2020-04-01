const events = require('events');
const moment = require('moment');

const myEmitter = new events.EventEmitter();


const currentTimeCallback = () => {
	 console.log(`Current Time: ${moment().format('h:mm:ss a')}`);
}

	// event listener
	myEmitter.on('currentTime​',currentTimeCallback);

	// trigger event, emit event
	myEmitter.emit('currentTime​');
 
