// Voyga

V.init(function() {

	var App = new Vue({

		el: "body",

		created: function() {

			for (var i = 0; i < this.habits.data.length; i++) {

				if (V.date().diff(this.habits.data[i].last) > 1) {

					this.habits.data[i].start = V.date().calc("day", 0).format();
					this.habits.data[i].last = V.date().calc("day", -1).format();
					this.habits.save();

				}

			}

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

			pluralityCheck: function(val, number) {

				if (number > 1) {

					return val + "s";

				} else {

					return val;

				}

			},

			removeYear: function(val) {

				var sep = val.indexOf("/") === -1 ? "-" : "/";

				return val.split(sep)[1] + " / " + val.split(sep)[2];

			}

		},

		data: {

			habits: V.storage("habits", [{

				name: "Exercise",
				start: V.date().calc("day", 0).format(),
				last: V.date().calc("day", -1).format()

			}]),

			status: {

				setting: false,
				deleting: false,
				adding: false

			},

			inputs: {

				habitName: ""

			},

			currentPage: "main",
			habitIndex: V.storage("habitIndex", 0)

		},

		methods: {

			accomplish: function() {

				if (this.accomplished === false) {

					this.habits.data[this.habitIndex.data].last = V.date().format();
					
				} else {

					this.habits.data[this.habitIndex.data].last = V.date().calc("day", -1).format();

				}

				this.habits.save();

			},

			getStreak: function(index) {

				var habit = this.habits.data[index];

				return V.date(habit.last).diff(habit.start) + 1;

			},

			ifAccomplished: function(index) {

				var habit = this.habits.data[index];

				return habit.last === V.date().format();

			},

			add: function() {

				var name = this.inputs.habitName;

				if (!V.is(name).empty()) {

					this.habits.add({

						name: name,
						start: V.date().calc("day", 0).format(),
						last: V.date().calc("day", -1).format()

					});

					this.currentPage = "main";
					this.habitIndex.set(this.habits.data.length - 1);

				}

			},

			delete: function() {

				this.habits.delete(this.habitIndex.data);
				this.status.setting = false;
				this.habitIndex.set(0);
					
			}

		},

		computed: {

			currentHabit: function() {

				return this.habits.data[this.habitIndex.data];

			},

			streak: function() {

				return this.getStreak(this.habitIndex.data);

			},

			accomplished: function() {

				return this.ifAccomplished(this.habitIndex.data);

			},

			full: function() {

				return this.habits.data.length >= 3;

			},

			empty: function() {

				return this.habits.data.length <= 0;

			}

		},

		watch: {

			currentPage: {

				handler: function() {

					if (this.currentPage === "main") {

						this.status.adding = false;
						this.inputs.habitName = "";

					}

				}

			},

			status: {

				deep: true,

				handler: function() {

					if (this.status.setting === false) {

						this.status.deleting = false;

					}

				}

			}

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

			if (App.currentPage === "main" && App.status.setting === false) {

				V.cordova.exit();

			}

			App.status.setting = false;
			App.currentPage = "main";

		});

		V.cordova.splashscreen.hide();
		V("body").appear();

	});

});