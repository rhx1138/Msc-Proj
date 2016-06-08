var person = {
	firsname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firsname + ' ' + this.lastname);
	}
};

person.greet();

console.log(person['firsname']);
