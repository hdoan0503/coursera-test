// var string = "Hello";
// string += " World";
// console.log(string + "!");


// console.log((5+4) / 3);
// console.log(undefined / 5);

// function test1 (a) {
// 	console.log( a / 5);
// }
// test1();


// // Equality
// // var x = 4, y =4 ;
// // if (x == y) {
// // 	console.log("x-4 is equal to y = 4");

// // }

// // x = "4";
// // if(x === y) {
// // 	console.log("x='4' is equal to y=4");
// // }
// // else {
// // 	console.log("x='4' is not equal to y=4")
// // }

// // // All false
// // if (false || null || undefined || "" || 0 || NaN){
// // 	console.log("This line won't ever execute");
// // }
// // else {
// // 	console.log ("All false");
// // }

// // all true
// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }

// function a() {
// 	return {
// 		name: "Hieu"
// 	};
// }

// function b() {
// 	return {
// 		name: "Doan"
// 	};
// }

// console.log(a());
// console.log(b());


// var sum=0;
// for (var i = 0; i < 10; i++) {
// 	sum += i;
// }
// console.log("sum of 0 through 9 is: " + sum);

// function orderChickenWith(sideDish){
// 	sideDish = sideDish || "whatever!";
// 	console.log("chicken with " + sideDish)
// }

// orderChickenWith("noodles")
// orderChickenWith()



//-------------------------------------Object----------------------------------------
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";


// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);

// var stockPropName = "stock of company"
// company[stockPropName] = 110;


// console.log("stock price is: " + company[stockPropName]);

//--------------------------------------Object Literal---------------------------
// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		favColor: "blue"	
// 	},
// 	"stock of company": 110
// };
// console.log(facebook.ceo.firstName);

// //------------------------------------Function--------------------------------
// function multiply(x, y) {
// 	return x * y;
// }
// console.log(multiply(5, 3));
// multiply.version = "v.1.0.0";
// console.log(multiply.toString());
// console.log(multiply.version);

// // Function factory
// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	}
// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));


// // Passing funtions as argument
// function doOperation(x, operation) {
// 	return operation(x);
// }

// var result = doOperation(5, multiplyBy3);
// console.log(result);

// var result = doOperation(100, doubleAll);
// console.log(result);


//copy by reference by value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update: ");
// console.log("a: " + a);
// console.log("b: " + b);

// var a ={ x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);



//pass by reference vs by value
// function changePrimitive(primValue)  {
// 	console.log("in changePrimitive...");
// 	console.log("before");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);  // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);

// function changeObject(objValue) {
// 	console.log("in changeObject...");
// 	console.log("before");
// 	console.log(objValue);


// 	objValue.x = 5;
// 	console.log("after:");
// 	console.log(objValue);
// }


// value = { x: 7 };
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);

//--------------------------------- 'this' keywork-----------------------------

// function test() {
// 	console.log(this);
// 	this.myName = "Hieu";
// }

// test();
// console.log(window.myName);



//-----------------------------function constructors-----------------------------
// function Circle (radius) {
// 	this.radius = radius;
// 	this.getArea =
// 		function() {
// 			return Math.PI * Math.pow(this.radius, 2);
// 		};
// }
// //------------------------function constructors with prototype--------------------------
// // function Circle (radius) {
// // 	this.radius = radius;
// // }
// // Circle.prototype.getArea = 
// // 	function () {
// // 		return Math.PI * Math.pow(this.radius, 2);
// // 	}

// var myCircle = new Circle(10); // new Object()
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);


//----------------------------Object literals and "this"------------------------------
// var literalCircle = { // new Object
// 	radius: 10,

// 	getArea: function () {
// 		var self = this;
// 		console.log(this);

// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		return Math.PI * Math.pow(this.radius, 2);

// 	}
// };
// console.log(literalCircle.getArea());


// ------------------Arrays-------------------------------
// var arr = new Array();
// arr[0] = "Hieu";
// arr[1] = 2;
// arr[2] = function (name) {
// 	console.log("Hello " + name);
// };

// arr[3] = {course: "HTML, CSS & JS"};

// console.log(arr);
// arr[2](arr[0]);
// console.log(arr[3].course);


//------------------Short hand array creation--------------
// var names = ["Hieu", "Ngan", "Thy"];
// console.log(names);
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }


//------------------loop through array------------------------
// var names2 = ["Hieu", "Ngan", "Thy"];

// var myObj = {
// 	name: "Hieu",
// 	course: "HTML/CSS/JS",
// 	platform: "Coursera"
// };
// for(var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]) ;
// }

// for(var name in names2) {
// 	console.log("Hello " + names2[name]);
// }


// names2.greeting = "Hi!";  //.greeting is a property of array it is same at 0 1 2 position

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }


//-------------------------------------Closures----------------------------------------

// function makeMultiplier (multiplier) {+
// 	function b() {
// 		console.log("Multiplier is: " + multiplier);
// 	}

// 	b();
// 	return (
// 			function (x) {
// 				return multiplier * x;
// 			}
// 		);
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10)); //its own exec env



