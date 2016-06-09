var Emitter = require('./emitter.js');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
	console.log('A greeting occured!');
});

// console.log('yes!');
emtr.emit('greet');