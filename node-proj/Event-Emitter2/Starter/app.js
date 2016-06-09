var Emitter = require('events');
var eventConfig = require('./config').events;
var Config = require('./config.js');

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occured!');
});

emtr.emit('greet');