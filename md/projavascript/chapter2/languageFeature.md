# Language Features   
主要内容：   
- Refrences   
- Function Overloading and Type-Checking   
- **Scope**   
- **Closures闭包**   
- **Context**    

## Refrences   
#### Demo 2.3:   
```js
var items = new Array('one', 'two', 'three');
var itemsRef = items;

items = new Array('new', 'array');
console.log(items != itemsRef);
```
#### Demo 2.4:   
```js
var item = 'test';
var itemRef = item;

item += 'ing';
console.log(item != itemRef);
```
## Function Overloading and Type-Checking   
function中默认包含一个参数 ***arguments***。
#### Demo 2.5:      
```js
function sendMessage(msg, obj) {
	if (arguments.length == 2) {
		obj.handleMsg(msg);
	}
	else {
		alert(msg);
	}
}
```
还有一种方法可以判断参数的数量，用 ***undefined*** 作判断。   
```js
function displayError(msg) {
	if (typeof msg == 'undefined') {
		msg = 'An error occurred';
	}
	console.log(msg);
}
```

Variable        | typeof Variable  | Variable.constructor          
--------------  | ---------------- | ----------------   
{an: 'object'}  | object           | Object   
{'an', 'array'} | object           | Array   
function() {}   | function         | Function   
'a string'      | string           | String   
55              | number           | Number   
true            | boolean          | Boolean
new User()      | object           | User   

```js
function User() {
	//
}

var user = new User();
console.log(typeof user == 'object');
console.log(user.constructor == User);
```   

## Scope   
JS作用域在function中，***但不是在block中***。   
#### Demo 2.10:   
```js
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
```

在基于浏览器的js中，全局变量实际上是window对象的属性。   
#### Demo 2.11:   
```js
var test = 'test';
console.log(window.test == test);
```

## Closures闭包   
闭包是指在其父函数已经终止后, 内部函数可以引用其外部封闭函数中存在的变量。   
```js
function delayedAlert(msg, time) {
	setTimeout(function() {
		console.log(msg);
	}, time);
}
```
- ### Currying:   
```js
function addGenerator(num) {
	return function(toAdd) {
		return num + toAdd;
	};
}
```
- ### 解决全局变量问题   
使用自执行的匿名函数可以隐藏变量，而不放到全局变量中。   
```js
(function() {
	var msg = 'Hello world';
	window.onload = function() {
		console.log(msg);
	};
})()
```
- ### **闭包的问题**   
闭包中内部函数可以使用父函数中的变量。但是，变量提供的是**最后的值**而不是初始值。在循环中经常发生这种问题。   
#### Demo 2.16:
```js
var items = ['click', 'keypress'];
for (var i = 0; i < items.length; i++) {
	(function() {
		var item = items[i];
		console.log(item);
	})()
}
```   

## Context   
```js
var obj = {
	yes: function() {
		this.val = true;
	},
	no: function() {
		this.val = false;
	}
};
var obj2 = {};

console.log(obj.val);

obj.yes();
console.log(obj.val);

obj2.no = obj.no;
obj2.no();
console.log('obj.val:', obj.val);
console.log('obj2.val:', obj2.val);
```   


##### [返回Object-Oriented JavaScript](#/md/projavascript/chapter2/note.md   "返回")
