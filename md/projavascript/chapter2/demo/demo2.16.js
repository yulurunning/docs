var functions = [];
var functions2 = [];
var items = ['click', 'keypress'];

for (var i = 0; i < items.length; i++) {
	var item = items[i];
	// 非闭包，调用时会获取到循环的最后一个值
	functions.push(function(){
		console.log(item);
	});
}
console.log('=============');
for (var i = 0; i < functions.length; i++) {
	functions[i]();
}


for (var i = 0; i < items.length; i++) {
	// 闭包，获取到到时迭代中的值
	(function() {
		var item = items[i];
		functions2.push(function(){
			console.log(item);
		});
	})()
}
console.log('=============');
for (var i = 0; i < functions2.length; i++) {
	functions2[i]();
}
