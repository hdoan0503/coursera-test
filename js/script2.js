(function (window) {
	var nganGreeter = {};
	nganGreeter.name = "Ngan";
	var greeting = "Hi ";
	nganGreeter.sayHi = function () {
		console.log(greeting + nganGreeter.name);
	}
	window.nganGreeter = nganGreeter;

})(window);



