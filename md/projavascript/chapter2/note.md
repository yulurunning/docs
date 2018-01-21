# 2. Object-Oriented JavaScript   
主要内容：   
- Refrences   

## Refrences   
#### Demo 2.3:   
```js
var items = new Array('one', 'two', 'three');
var itemsRef = items;

items = new Array('new', 'array');
console.log(items != itemsRef);
```
