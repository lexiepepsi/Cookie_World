$(document).ready(function() {

// this works bc undefined = false, so if Cookies.get("choc-key") returns undefined, undefined will be false, if there is any value the conditional will be true and the code will run and create an alert

	if (Cookies.get("choc-key")) {
		alert("You have " + Cookies.get("choc-key") + " chocolate cookies in your basket.");
	} else {
		alert("You have 0 chcolate cookies. Do you want any chocolate cookies?")
	}

	if (Cookies.get("sugar-key")) {
		alert("You have " + Cookies.get("sugar-key") + " sugar cookies.");
	} else {
		alert("You have 0 sugar cookies. Do you want any sugar cookies?")
	}


	if (Cookies.get("lemon-key")) {
		alert("You have " + Cookies.get("lemon-key") + " lemon cookies.");
	} else {
		alert("You have 0 lemon cookies. Do you want any lemon cookies?")
	}



// the value of choc-input should be stored in a variable called numberchoc
// then set a cookie with the value choc-key = (numberchoc)

	$("#choc-form").submit(function(event) {
		event.preventDefault();

		var numberofchocs = $("#choc-input").val();
		Cookies.set("choc-key", numberofchocs);

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



// Reset buttons

	$("#choc-reset").click(function() {
		var numberofchocs = 0;
		Cookies.set("choc-key", numberofchocs);
	});

	$("#sugar-reset").click(function() {
		var numberofsugars = 0;
		Cookies.set("sugar-key", numberofsugars);
	});

	$("#lemon-reset").click(function() {
		var numberoflemons = 0;
		Cookies.set("lemon-key", numberoflemons);
	});
	
});

// $(".cookieimg").hover(function() {
	// 	alert("Welcome! Please enter the number of each type of cookie you'd like in the boxes below and click Submit. If you change your mind click Reset to start over.");
	// });

