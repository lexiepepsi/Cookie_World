$(document).ready(function() {


// DISPLAY THE NUMBER OF COOKIES IN THE 'COOKIE BASKET' WHEN USER RETURNS

// this works bc undefined = false, so if Cookies.get("choc-key") returns undefined, undefined will be false, if there is any value the conditional will be true and the code will run and create an alert

// if the cookie key choc-key returns a value greater than 0 change the text of the choc-display to the value of the cookie key called choc-key, else change the text to 0

	if (Cookies.get("choc-key") && parseInt(Cookies.get("choc-key")) > 0) {
		$("#choc-display").text(Cookies.get("choc-key"));
	} else {
		$("#choc-display").text(0);
	}

	if (Cookies.get("sugar-key") && parseInt(Cookies.get("sugar-key")) > 0) {
		$("#sugar-display").text(Cookies.get("sugar-key"));
	} else {
		$("#sugar-display").text(0);
	}

	if (Cookies.get("lemon-key") && parseInt(Cookies.get("lemon-key")) > 0) {
		$("#lemon-display").text(Cookies.get("lemon-key"));
	} else {
		$("#lemon-display").text(0);
	}

	// if (Cookies.get("choc-key") && parseInt(Cookies.get("choc-key")) > 0) {
	// 	$("#choc-display").text(Cookies.get("choc-key"));
	// } 
	// else {
	// 	alert("You have 0 chcolate cookies. Do you want any chocolate cookies?")
	// }

	// if (Cookies.get("sugar-key")) {
	// 	alert("You have " + Cookies.get("sugar-key") + " sugar cookies.");
	// } else {
	// 	alert("You have 0 sugar cookies. Do you want any sugar cookies?")
	// }

	// if (Cookies.get("lemon-key")) {
	// 	alert("You have " + Cookies.get("lemon-key") + " lemon cookies.");
	// } else {
	// 	alert("You have 0 lemon cookies. Do you want any lemon cookies?")
	// }


// ALERT USER ON SCROLL HOW TO USE SITE

// original alert on hover
// 	$(".cookieimg").hover(function() {
// 		alert("Welcome! Please enter the number of each type of cookie you'd like in the boxes below and click Submit. If you change your mind click Reset to start over.");
// 	});

// Why doesn't  hasBeenTrigged = false work?
// = sets a value, === tests if condition is true/false
// would have to be: hasBeenTriggered === false

	if (Cookies.get("choc-key")) {
		alert("Welcome back! Let's eat some cookies!")
	} else if (Cookies.get("sugar-key")) {
		alert("Welcome back! Let's eat some cookies!")
	} else if (Cookies.get("lemon-key")) {
		alert("Welcome back! Let's eat some cookies!")
	} else {
		$(function(){

	    var hasBeenTrigged = false;

	    $(window).scroll(function() {
	        if ($(this).scrollTop() >= 400 && !hasBeenTrigged) {
	            alert("Welcome! Please enter the number of each type of cookie you'd like in the boxes below and click Submit. The cookies add up! If you change your mind click Reset to start over.");
	            hasBeenTrigged = true;
		        }
		    });
		});
	}

// SET NUMBER OF COOKIES TO A BROWSER COOKIE WHEN FORM IS SUBMITTED

// the value of choc-input should be stored in a variable called numberchoc
// then set a cookie with the value choc-key = (numberchocs)

// **What is (event) for? is that for prevent default?
// > we need event bc it gives you access to event object and allows us to access things like the default behavior, so we can change the default behavior to not refresh the page or attempt to push info to a server
// what is .val doing?
// > its a jquery function used on input fields to grab the value typed in an input field
	
	$("#choc-form").submit(function(event) {
		event.preventDefault();


		if (Cookies.get("choc-key") && parseInt(Cookies.get("choc-key")) > 0) {
			var oldvalue = parseInt(Cookies.get("choc-key"));

			var numberofchocs = $("#choc-input").val();
			Cookies.set("choc-key", oldvalue + parseInt(numberofchocs));

			$("#choc-display").text(oldvalue + parseInt(numberofchocs));

		} else {
			var numberofchocs = $("#choc-input").val();
			Cookies.set("choc-key", numberofchocs);

			$("#choc-display").text(numberofchocs);
		}

// earlier code that used alert to check for negatives, solved this with min=1 on the input object in html, better bc it doesn't allow the form to be submitted so the cookie doesn't get set to negative or 0
		// else if (Cookies.get("choc-key") > 0) {
		// 		alert("You're silly! Don't you want some cookies?")
		// } else {
		// 	var numberofchocs = $("#choc-input").val();
		// 	Cookies.set("choc-key", numberofchocs);

		// 	$("#choc-display").text(numberofchocs);
		// }
	});



	$("#sugar-form").submit(function(event) {
		event.preventDefault();

		if (Cookies.get("sugar-key") && parseInt(Cookies.get("sugar-key")) > 0) {
			var oldvalue = parseInt(Cookies.get("sugar-key"));

			var numberofsugars = $("#sugar-input").val();
			Cookies.set("sugar-key", oldvalue + parseInt(numberofsugars));

			$("#sugar-display").text(oldvalue + parseInt(numberofsugars));

		} else {
			var numberofsugars = $("#sugar-input").val();
			Cookies.set("sugar-key", numberofsugars);

			$("#sugar-display").text(numberofsugars);
		}
	});
		

	
	$("#lemon-form").submit(function(event) {
		event.preventDefault();

		if(Cookies.get("lemon-key") && parseInt(Cookies.get("lemon-key")) > 0) {
			var oldvalue = parseInt(Cookies.get("lemon-key"));

			var numberoflemons = $("#lemon-input").val();
			Cookies.set("lemon-key", oldvalue + parseInt(numberoflemons));

			$("#lemon-display").text(oldvalue + parseInt(numberoflemons));

		} else {
			var numberoflemons = $("#lemon-input").val();
			Cookies.set("lemon-key", numberoflemons);

			$("#lemon-display").text(numberoflemons);
		}

	});



// RESET BUTTONS

// did you say cookies are always strings? Could i do the parse int thing down here?
// >Yes always strings, you have to do a parse int on get never on set bc even with a parse int a cookie will always be set as a string

	$("#choc-reset").click(function() {
		var numberofchocs = 0;
		Cookies.set("choc-key", numberofchocs);

		$("#choc-display").text(numberofchocs);
	});

	$("#sugar-reset").click(function() {
		var numberofsugars = 0;
		Cookies.set("sugar-key", numberofsugars);

		$("#sugar-display").text(numberofsugars);
	});

	$("#lemon-reset").click(function() {
		var numberoflemons = 0;
		Cookies.set("lemon-key", numberoflemons);

		$("#lemon-display").text(numberoflemons);
	});


	
});

