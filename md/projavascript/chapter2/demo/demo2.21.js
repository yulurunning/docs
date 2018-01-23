function User() {}

var me = new User();
var you = new me.constructor();

console.log(me.constructor == you.constructor);
