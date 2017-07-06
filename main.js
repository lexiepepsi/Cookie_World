$(document).ready(function() {


// DISPLAY THE NUMBER OF COOKIES IN THE 'COOKIE BASKET' WHEN USER RETURNS

// this works bc undefined = false, so if Cookies.get("choc-key") returns undefined, undefined will be false, if there is any value the conditional will be true and the code will run and create an alert

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

	$(function(){

    var hasBeenTrigged = false;

    $(window).scroll(function() {
    	// hasBeenTriggered === false
        if ($(this).scrollTop() >= 400 && !hasBeenTrigged) {
            alert("Welcome! Please enter the number of each type of cookie you'd like in the boxes below and click Submit. If you change your mind click Reset to start over.");
            hasBeenTrigged = true;
	        }
	    });
	});


// SET NUMBER OF COOKIES TO A BROWSER COOKIE WHEN FORM IS SUBMITTED

// the value of choc-input should be stored in a variable called numberchoc
// then set a cookie with the value choc-key = (numberchocs)

// **What is (event) for? is that for prevent default?
// > we need event bc it gives you access to event object and allows us to access things like the default behavior, so we can change the default behavior to not refresh the page or attempt to push info to a server
// what is .val doing?
// > its a jquery function used on input fields to grab the value typed in an input field

	
	$("#choc-form").submit(function(event) {
		event.preventDefault();

		var numberofchocs = $("#choc-input").val();
		Cookies.set("choc-key", numberofchocs);

		if (Cookies.get("choc-key") > 0) {
			$("#choc-display").text(numberofchocs);
		} else {
			alert("No negative cookies silly!")
		}

	});


	$("#sugar-form").submit(function(event) {
		event.preventDefault();

		var numberofsugars = $("#sugar-input").val();
		Cookies.set("sugar-key", numberofsugars);

		if (Cookies.get("sugar-key") > 0) {
			$("#sugar-display").text(numberofsugars);
		} else {
			alert("No negative cookies silly!")
		}
	});

	
	$("#lemon-form").submit(function(event) {
		event.preventDefault();

		var numberoflemons = $("#lemon-input").val();
		Cookies.set("lemon-key", numberoflemons);

		if (Cookies.get("lemon-key") > 0) {
			$("#lemon-display").text(numberoflemons);
		} else {
			alert("No negative cookies silly!")
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

