// Voyga

V.ready(function() {

	var theme = 0;
	var themes = ["blue", "pink"];
	var colors = ["#d5ecff", "#ffd6d4"]

	function changeTheme() {

		theme = 1 - theme;

		V("body").css("background", colors[theme]);
		V("#" + themes[theme] + "Back").css("opacity", "0.6");
		V("#" + themes[1 - theme] + "Back").css("opacity", "0");

	}

	V("body").on("click", function() {

		changeTheme();

	});

	V("body").appear();

});
