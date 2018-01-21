var foo = 'test';
if (true) {
	var foo = 'new test';
}
// new test
console.log(foo);

function test() {
	var foo = 'old test';
	// old test
	console.log(foo);
}
test();
// new test
console.log(foo);
