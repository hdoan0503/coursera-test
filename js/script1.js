(function (window) {
	var hieuGreeter = {};
	hieuGreeter.name = "Hieu";
	var greeting = "Hello ";
	hieuGreeter.sayHello = function () {
		console.log(greeting + hieuGreeter.name);
	}
	window.hieuGreeter = hieuGreeter;
})(window);