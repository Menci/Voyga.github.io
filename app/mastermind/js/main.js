// Voyga

V.init(function() {

	var App = new Vue({

		el: "body",

		created: function() {

			this.initialize();

		},

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

			removeZeroes: function(val) {

				return val === 0 ? "~" : val;

			}

		},

		data: {

			guesses: [],
			currentGuess: [0, 0, 0, 0],
			answer: undefined,

			temp: {

				numbers: [1, 2, 3, 4, 5, 6]

			}

		},

		methods: {

			generateAnswer: function() {

				return [0, 0, 0, 0].map(function(val) {

					return Math.ceil(Math.random() * 6);

				});

			},

			guess: function(val) {

				var index = this.currentGuess.indexOf(0);

				if (index !== -1) {

					this.currentGuess.splice(index, 1, val);

				}

			},

			back: function(index) {

				this.currentGuess.splice(index, 1, 0);

			},

			go: function() {

				if (this.win === false) {

					if (this.currentGuess.indexOf(0) === -1) {

						this.guesses.push(this.currentGuess);
						this.currentGuess = [0, 0, 0, 0];

					}

				}

				else if (this.win === true) {

					this.initialize();

				}

			},

			initialize: function() {

				this.guesses = [];
				this.currentGuess = [0, 0, 0, 0];
				this.answer = this.generateAnswer();

			},

			check: function(guess) {

				var leftGuess = [],
					leftNumbers = [],
					black = 0,
					white = 0;

				for (var i = 0; i < this.answer.length; i++) {

					if (guess[i] === this.answer[i]) {

						black += 1;

					}

					else {

						leftGuess.push(guess[i]);

						if (leftNumbers.indexOf(this.answer[i]) === -1) {

							leftNumbers.push(this.answer[i]);

						}

					}

				}

				white = (function() {

					return leftNumbers.filter(function(val) {

						return leftGuess.indexOf(val) !== -1;

					}).length;

				})();

				return {

					black: black,
					white: white

				};

			}

		},

		computed: {

			steps: function() {

				return this.guesses.length;

			},

			results: function() {

				var self = this;

				return this.guesses.map(function(val) {

					return self.check(val);

				});

			},

			win: function() {

				return V.is(this.results).empty() ? false : this.results[this.results.length - 1].black === 4;

			},

			buttonText: function() {

				return this.win ? "Restart" : "Go!";

			}

		},

		watch: {

			guesses: function() {

				if (this.guesses.length >= 1) {

					var list = V("#guessesList");

					list.scrollTop(list.prop("scrollHeight"));

				}

			}

		}

	});

	V.cordova.ready(function() {

		var Misc = {

			fastclickInit: function() {

				FastClick.attach(V("body").dom);

			}

		};

		Misc.fastclickInit();

		V.cordova.hideSplashscreen();
		V("body").appear();

	});

});