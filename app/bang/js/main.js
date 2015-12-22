// Voyga

V.init(function() {

	var App = new Vue({

		el: "body",

		directives: {

			pressingClass: {

				isLiteral: true,

				bind: function() {

					var element = V(this.el),
						className = this.expression;

					element.on("touchstart", function() {

						element.classList.add(className);

					});

					element.on("touchmove touchend", function() {

						element.classList.remove(className);

					});

				}

			}

		},

		filters: {

			speedLevel: function(value) {

				var levels = {

					"100": "very fast",
					"150": "fast",
					"200": "middle",
					"250": "slow",
					"300": "very slow"

				};

				return levels[value + ""];

			}

		},

		data: {

			content: V.storage("content", {

				text: "BIGBANG",
				color: "#000000",
				font: "Adamcg",
				size: 120,
				speed: 150

			}),

			inputs: {

				text: "",
				color: V.storage("content").data.color,
				font: V.storage("content").data.font,
				size: V.storage("content").data.size,
				speed: V.storage("content").data.speed

			},

			static: {

				fonts: ["OpenSans", "Adamcg"],
				colors: ["#000000", "#5f9bef", "#10e5c9", "#ff6d7a", "#ffea49"]

			},

			colorParam: 0,
			timer: 0,
			currentPage: "flash"

		},

		methods: {

			flash: function() {

				if (this.timer) {

					clearInterval(this.timer);

				}

				this.timer = setInterval((function(self) {

					return function() {

						self.colorParam = 1 - self.colorParam;

					};

				})(this), this.content.data.speed);

			},

			save: function() {

				var inputs = this.inputs;

				this.content.data.text = inputs.text;
				this.content.data.color = inputs.color;
				this.content.data.size = parseInt(inputs.size);
				this.content.data.speed = parseInt(inputs.speed);
				this.content.save();
				this.flash();

			}

		},

		computed: {

			colors: function() {

				return [this.content.data.color, "#ffffff"];

			}

		},

		watch: {

			currentPage: {

				handler: function() {

					if (this.currentPage === "flash") {

						V.cordova.rotate("landscape");

					} else {

						V.cordova.rotate("portrait");

					}

				}

			}

		},

		ready: function() {

			this.flash();

		}

	});

	V.cordova.ready(function() {

		var Misc = {

			fastclickInit: function() {

				FastClick.attach(V("body").el);

			}

		};

		Misc.fastclickInit();

		V.cordova.back(function() {

			if (App.currentPage === "flash") {

				V.cordova.exit();

			}

			App.currentPage = "flash";

		});

		V.cordova.splashscreen.hide();
		V("body").appear();

	});

});