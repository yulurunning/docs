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
