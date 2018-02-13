# Object-Oriented Basics   
主要内容：   
- Objects   
- Object Creation   
- Public Methods   
- Private Methods   

## Objects   
对象是JavaScript的基础。
```js
var obj = new Object();
obj.val = 5;
obj.click = function() {
	console.log('Hello');
};

var obj2 = {
	val: 5,
	click: function() {
		console.log('Hello');
	}
};
```

## Object Creation   
JavaScript没有类的概念。创建对象的概念称为 ***prototypal inheritance*** 。   
```js
function User(name) {
	this.name = name;
}

var user = new User('a');
console.log(user.name);

User('b');
console.log(window.name);
```   
***constructor*** 是每个对象都有的属性，永远指向创建对象的**function**。   
```js
function User() {}

var me = new User();
var you = new me.constructor();

console.log(me.constructor == you.constructor);
```

## Public Methods   
- ### prototype    
	任何 ***prototype*** 的属性都是在每个对象实例上可用的。这个creation/reference的过程提供我们一个简易版本的继承。因为 ***portotype*** 也是一个对象，我们可以像其他对象一样给它添加属性。添加到 ***prototype*** 的新属性也会成为通过prototype创建的实例的一部分。   

	```js
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
	```

## Private Methods   
私有方法和私有属性仅可以被其他私有方法、私有属性和特权方法访问。     

```js   
function Classroom(students, teacher) {
	function display() {
		console.log(this.students.join(' '));
	}
	this.students = students;
	this.teacher = teacher;

	display();
}

var classroom = new Classroom(['John', 'Bob'], 'Mr. Smith');
// Fail
class.display();
```

##### [返回Object-Oriented JavaScript](#/md/projavascript/chapter2/note.md   "返回")
