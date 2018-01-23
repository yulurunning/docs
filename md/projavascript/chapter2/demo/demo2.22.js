function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.getName = function() {
	return this.name;
};
User.prototype.getAge = function() {
	return this.age;
};

var user = new User('Bob', 30);
console.log(user.getName(), user.getAge());
