// Voyga

V.init(function() {

	new Vue({

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

		data: {

			currentSection: V.storage("currentSection", "hn"),
			articles: V.storage("articles", {}),

			status: {

				changing: false

			},

			static: {

				"names": {

					"hn": "Hacker News",
					"ph": "Product Hunt",
					"md": "Medium",
					"gt": "Github Trending",
					"rd": "Reddit"

				}

			}

		},

		methods: {

			open: function(url) {

				window.open(url);

			}

		},

		computed: {

			// ...

		},

		ready: function() {

			var self = this;
			var url = V.cordova.isCordova ? "data/articles.json" : "../data/articles.json";

			if (navigator.onLine) {

				url = "http://voyga.top/app/one/data/articles.json";

			}

			V.ajax({

				method: "GET",
				url: url,

				success: function(data) {

					try {

						self.articles.data = JSON.parse(data);
						self.articles.save();

					} catch (err) {

						// ...

					}

				}

			});

		}

	});

	V.cordova.ready(function() {

		FastClick.attach(V("body").el);
		V.cordova.splashscreen.hide();
		V("body").appear();

	});

});
