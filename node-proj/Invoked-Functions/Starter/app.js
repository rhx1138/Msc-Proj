
var firstname = 'Jane';

// var protected within this function

(function (lastname) {

	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);

}('Doe'));


console.log(firstname);

