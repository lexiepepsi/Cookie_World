$(document).ready(function() {

	if (Cookies.get("choc-key")) {
		alert("You'd like " + Cookies.get("choc-key") + " chocolate cookies");
	}

	// ^this works bc undefined = false, so if Cookies.get("choc-key") returns undefined, undefined will be false, if there is any value the conditional will be true and the code will run and create an alert

	if (Cookies.get("sugar-key")) {
		alert("You'd like " + Cookies.get("sugar-key") + " sugar cookies");
	}

	if (Cookies.get("lemon-key")) {
		alert("You'd like " + Cookies.get("lemon-key") + " lemon cookies");
	}



	$("#choc-form").submit(function(event) {
		event.preventDefault();

		var numberofchocs = $("#choc-input").val();
		Cookies.set("choc-key", numberofchocs);

		// the value of choc-input should be stored in a variable called numberchoc
		// then set a cookie with the value choc-key = (numberchoc)

	});


	$("#sugar-form").submit(function(event) {
		event.preventDefault();

		var numberofsugars = $("#sugar-input").val();
		Cookies.set("sugar-key", numberofsugars);

	});

	
	$("#lemon-form").submit(function(event) {
		event.preventDefault();

		var numberoflemons = $("#lemon-input").val();
		Cookies.set("lemon-key", numberoflemons);

	});


	// $(".cookieimg").hover(function() {
	// 	alert("Welcome! Please enter the number of each type of cookie you'd like in the boxes below and click Submit. If you change your mind click Reset to start over.");
	// });

// get the value
// 	document.getElementById("sugarinput").value

});

// Example from class!
	// <form id="my-form">
	// 	First name:<br>
	// 	<input type="text" id="first-name">
	// 	<input type="submit" value="Submit">
	// </form>

	// <script src="cookies.js" type="text/javascript"></script>

	// <script>

	// 	var x = (Cookies.get("firstName"));

	// 	if (x) {
	// 		alert("hi " + x);
	// 	} else {
	// 		alert("enter your name");
	// 	}
	

	// 	$("#my-form").submit(function(event) {
	// 		event.preventDefault(); 
	// 		// have to prevent the default value of submit to try to send to server and refresh page

	// 		var name = $("#first-name").val();
	// 		Cookies.set("firstName", name);
	// 	});	
	// </script>

