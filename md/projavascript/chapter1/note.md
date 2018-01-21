# 1.Modern JavaScript Programming   
主要包含：   
- Object-Oriented JavaScript   
- Packaging for Distribution   
- Unobrusive DOM Scripting   
- Ajax      

## Object-Oriented JavaScript   
```js
function Lecture(name, teacher) {
	this.name = name;
	this.teacher = teacher;
}
Lecture.prototype.display = function() {
	return this.teacher + ' is teaching ' + this.name;
}
```

## Packaging for Distribution    
```js
YAHOO.util.Event.addListener('body', 'mouseover', function(){
	// Do something
});
```

## Unobrusive DOM Scripting   
- The Document Object Model   
- Events   
- JavaScript and CSS   

## Ajax
Asynchronous JavaScript and XML   
