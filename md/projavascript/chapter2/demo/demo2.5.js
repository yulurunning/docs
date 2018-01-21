function sendMessage(msg, obj) {
	if (arguments.length == 2) {
		obj.handleMsg(msg);
	}
	else {
		alert(msg);
	}
}
