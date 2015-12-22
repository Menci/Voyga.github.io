// Voyga

V.init(function() {

	"use strict";

	var App = new Vue({

		el: "body",

		filters: {

			toRGB: function(value) {

				return this.format.data === "rgb" ? V.color(value).rgb().join(", ") : value;

			},

			format: function(value, format) {

				return format === this.format.data ? value : "#999";

			}

		},

		data: {

			color: randomColor(),
			preColor: undefined,
			hue: "random",
			currentPage: "background",
			collection: V.storage("collection", []),
			format: V.storage("format", "hex"),

			hues: {

				"red": "#ef6360",
				"green": "#65f9b1",
				"blue": "#5f9bef",
				"yellow": "#fff176",
				"purple": "#7c4dff",
				"random": function() { return randomColor(); }

			}

		},

		methods: {

			stopPropagation: function(event) {

				event.stopPropagation();

			},

			changeColor: function(color) {

				this.preColor = this.color;

				if (this.hue === "random") {

					this.color = color || randomColor();

				}

				else {

					this.color = color || randomColor({ hue: this.hue });

				}

			},

			changeHue: function(hue) {

				this.hue = hue;
				this.changeColor(V.is(this.hues[hue]).string() ? this.hues[hue] : this.hues[hue]());
				this.currentPage = "background";

			},

			changeFormat: function(format) {

				this.format.set(format);
				this.currentPage = "background";

			},

			initializeAnimation: function() {

				V("#heartIcon").css("animation", null);

			},

			addColor: function(color) {

				V("#heartIcon").css("animation", "beat 0.5s");

				if (!this.collection.includes(color)){

					this.collection.add(color);

				}

			},

			removeColor: function(color) {

				this.collection.delete(color);

			},

			toggleFloatBalls: function(param) {

				var backBall = V("#backBall"),
					floatBalls = V(".floatBalls"),
					methods = ["add", "remove"];

				backBall.classList[methods[param]]("floatBallHide");

				for (var i = 0 ; i < floatBalls.length - 1 ; i ++) {

					floatBalls[i].classList[methods[1 - param]]("floatBallHide");

				}

			},

			rewind: function() {

				if (V.is(this.preColor).string()) {

					this.color = this.preColor;

				}

			}

		},

		computed: {

			hexTextColor: function() {

				return this.format.data === "hex" ? this.color : "#999";

			},

			rgbTextColor: function() {

				return this.format.data === "rgb" ? this.color : "#999";

			}

		},

		watch: {

			currentPage: function(val) {

				if (val === "background") {

					this.toggleFloatBalls(0);

				}

				else {

					this.toggleFloatBalls(1);

				}

			}

		}

	});

	V.cordova.ready(function() {

		var Misc = {

			fastclickInit: function() {

				FastClick.attach(V("body").el);

			},

			shakeInit: function() {

				new Shake({

					threshold: 5,
					timeout: 1000

				}).start();

				window.addEventListener("shake", function() {

					App.rewind();

				});

			},

			sortInit: function() {

				var list = V("#list").el;

				new Slip(list);

				list.addEventListener("slip:beforeswipe", function(e) {

					e.preventDefault();

				});

				list.addEventListener("slip:beforereorder", function(e) {

					if (/remove/.test(e.target.className) === true) {

						e.preventDefault();

					}

				});

				list.addEventListener("slip:reorder", function(e) {

					e.target.parentNode.insertBefore(e.target, e.detail.insertBefore);

					var colorValues = V(".colorValues"),
						arr = [];

					for (var i = 0 ; i < colorValues.length ; i ++) {

						arr.push(colorValues[i].val());

					}

					App.collection.set(arr);

				});

			}

		};

		Misc.fastclickInit();
		Misc.shakeInit();
		Misc.sortInit();

		V.cordova.back(function() {

			if (App.currentPage === "background") {

				V.cordova.exit();

			}

			App.currentPage = "background";

		});

		V.cordova.splashscreen.hide();
		V("body").appear();

	});

});