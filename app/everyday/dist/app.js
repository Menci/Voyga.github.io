// Voyga

Vue.directive("pressing-class", {

	isLiteral: true,

	bind: function bind() {

		var element = V(this.el);
		var className = this.expression;

		element.on("touchstart", function () {

			element.classList.add(className);
		});

		element.on("touchmove touchend", function () {

			element.classList.remove(className);
		});
	}
});

Vue.directive("icon", {
	bind: function bind() {

		var element = V(this.el);
		var icon = this.expression;

		element.classList.add("iconBox");
		element.html("<i class='icon icon-" + icon + " center'></i>");
	}
});

// Voyga

Vue.filter("pluralfy", function (val, number) {

	if (number > 1) {

		return val + "s";
	} else {

		return val;
	}
});

new Vue({

	el: "body",

	data: function data() {

		return {

			page: "main",
			adding: false,
			deleting: false,
			habits: new Store("habits", []),
			index: new Store("index", 0),

			status: {

				adding: false,
				deleting: false

			},

			inputs: {

				name: ""

			}

		};
	},


	methods: {
		accomplish: function accomplish() {

			var index = this.index.data;
			var days = moment().diff(moment(this.habits.data[index].start, "MM-DD-YYYY"), "days");

			if (this.ifAccomplished(index)) {

				this.habits.data[index].calendar[days] = false;
			} else {

				this.habits.data[index].calendar[days] = true;
			}

			this.habits.data[index].calendar = this.habits.data[index].calendar.slice();
			this.habits.save();
		},
		ifAccomplished: function ifAccomplished(index) {

			var days = moment().diff(moment(this.habits.data[index].start, "MM-DD-YYYY"), "days");

			return this.habits.data[index].calendar[days];
		},
		getStreak: function getStreak(index) {

			var habit = this.habits.data[index];
			var length = habit.calendar.length;
			var streak = 0;

			for (var i = length - 2; i >= 0; i--) {

				if (habit.calendar[i]) {

					streak += 1;
				} else {

					break;
				}
			}

			if (habit.calendar[length - 1]) {

				streak += 1;
			}

			return streak;
		},
		add: function add() {

			var habits = this.habits;
			var inputs = this.inputs;

			if (inputs.name && habits.data.length < 3 && habits.data.every(function (i) {
				return i.name !== inputs.name;
			})) {

				habits.data.push({

					name: inputs.name,
					start: moment().format("MM-DD-YYYY"),
					calendar: [false]

				});

				habits.save();
				inputs.name = "";
				this.page = "main";
				this.status.adding = false;
				this.index.set(habits.data.length - 1);
			}
		},
		delete: function _delete() {

			this.habits.data.splice(this.index.data, 1);
			this.habits.save();
			this.toPage("main");
		},
		toPage: function toPage(page) {
			var _this = this;

			this.page = page;
			Object.keys(this.status).forEach(function (i) {
				return _this.status[i] = false;
			});
		}
	},

	computed: {
		currentHabit: function currentHabit() {

			return this.habits.data[this.index.data];
		},
		accomplished: function accomplished() {

			return this.ifAccomplished(this.index.data);
		},
		streak: function streak() {

			return this.getStreak(this.index.data);
		},
		since: function since() {

			var start = moment(this.currentHabit.start, "MM-DD-YYYY");

			return start.format("MM") + " / " + start.format("DD");
		},
		empty: function empty() {

			return this.habits.data.length === 0;
		}
	},

	created: function created() {

		for (var i = 0; i < this.habits.data.length; i++) {

			var days = moment().diff(moment(this.habits.data[i].start, "MM-DD-YYYY"), "days");

			for (var j = 0; j < days - this.habits.data[i].calendar.length + 1; j++) {

				this.habits.data[i].calendar.push(false);
			}
		}

		this.habits.save();

		if (!this.currentHabit) {

			this.index.set(this.habits.data.length - 1);
		}
	},
	ready: function ready() {
		var _this2 = this;

		CordovaUtils.ready(function () {

			CordovaUtils.back(function () {

				if (!Object.keys(_this2.status).every(function (i) {
					return !_this2.status[i];
				})) {

					Object.keys(_this2.status).forEach(function (i) {
						return _this2.status[i] = false;
					});
				} else if (_this2.page !== "main") {

					_this2.page = "main";
				} else {

					CordovaUtils.exit();
				}
			});

			CordovaUtils.splashscreen.hide();
			FastClick.attach(V("body").el);
			V("body").appear();
		});
	}
});