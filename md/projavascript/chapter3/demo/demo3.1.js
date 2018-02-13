function Person(name) {
	this.name = name;
}

Person.prototype.getName = function() {
	return this.name;
}

function User(name, password) {
	this.name = name;
	this.password = password;
}

var userOld = new User('Old User', 1111);
try{
	console.log(userOld.getName());
	console.log(userOld.getPassword());
}
catch(e) {
	console.log(e);
}

User.prototype = new Person();
User.prototype.getPassword = function() {
	return this.password;
}

var user = new User('Tom', '123456');
console.log(user.getName());
console.log(user.getPassword());
