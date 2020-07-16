//DOM manipulation
// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument); 
document.addEventListener("DOMContentLoaded", 
	function(event) {
		function sayHello (event) {
			console.log(event);
			this.textContent = "Said it!";
			var name =
				document.getElementById("name").value; //get value of input
				var message = "<h2>Hello " + name + "!</h2>";

		document
			.getElementById("content")
			.textContent = message; //output content HTML
		document
			.getElementById("content")
			.innerHTML = message; //output content HTML with HTML tag

		if (name === "student") {
			var title = 
				document
					.querySelector("#title")
					.textContent;
				title += " & Lovin' it!";
				document
					.querySelector("h1")
					.textContent = title;	
		}
	}

	//-----------------Unobstructive event binding----------------------
	// document.querySelector("button")
	// 	.addEventListener("click", sayHello)

	document.querySelector("button")
		.onclick = sayHello;
	
	document.querySelector("body")
		.addEventListener("mousemove",
			function (event) {
				if(event.shiftKey === true) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
				}
				
			}
		);
	}

);

