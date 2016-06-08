function Person(firstname, lastname) {
	
	this.firstname = firstname;
	this.lastname = lastname;
}

var john = new Person('John', 'Doe');
var abby = new Person('Abby', 'Jane');


Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};


Person.prototype.farewell = function() {
	console.log('Goodbye, ' + this.firstname + ' ' + this.lastname);
};

john.greet();
abby.greet();

john.farewell();
abby.farewell();




