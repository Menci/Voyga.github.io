// Voyga

V.cordova.ready(function() {

	var body = V("body"),
		main = V("#main"),
		lightening = V("#lightening"),
		triangles = V(".triangles"),
		status = 0,
		themeParam = 0,
		themes = ["#10e5c9", "#ff6d7a"],
		colors = [themes[themeParam], "#fafafa"];

	triangles[0].css("borderBottom", "144px solid " + colors[0]);
	triangles[1].css("borderTop", "144px solid " + colors[0]);

	var flash = setInterval(function() {

		main.css("background", colors[status]);
		status = 1 - status;
		triangles[0].css("borderBottom", "144px solid " + colors[status]);
		triangles[1].css("borderTop", "144px solid " + colors[status]);

	}, 120);

	main.on("touchend", function() {

		themeParam = 1 - themeParam;
		colors = [themes[themeParam], "#fafafa"];

	});

	V.cordova.hideSplashscreen();
	V("body").appear();

});
