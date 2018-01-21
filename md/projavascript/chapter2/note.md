# 2. Object-Oriented JavaScript   
主要内容：   
- Refrences   
- Function Overloading and Type-Checking   
- **Scope**   
- **Closures闭包**   

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
### Currying:   
```js
function addGenerator(num) {
	return function(toAdd) {
		return num + toAdd;
	};
}
```


##### [返回Pro Javascript首页](#/md/projavascript/index.md   "返回")
