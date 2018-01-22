function User(name) {
	this.name = name;
}

var user = new User('a');
console.log(user.name);

User('b');
console.log(window.name);
