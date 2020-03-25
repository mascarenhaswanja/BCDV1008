const Say = require('say').Say
const say = new Say('darwin' || 'win32' || 'linux')

// Use default system voice and speed
 say.speak('Hello!')

// Stop the text currently being spoken
say.stop() 

// More complex example (with an OS X voice) and slow speed
say.speak('Hello', 'Alex', 0.5) 


// Callback
say.speak( 'Good night', 0.5, (err) => {
	if (err) {
		return console.error(err)
	}
	console.log('')
});

setTimeout(() => say.speak("I'm sorry, Dave"), 5000);