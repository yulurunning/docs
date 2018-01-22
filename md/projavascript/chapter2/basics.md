# Object-Oriented Basics   
主要内容：   
- Objects   
- Object Creation   

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

##### [返回Object-Oriented JavaScript](#/md/projavascript/chapter2/note.md   "返回")
