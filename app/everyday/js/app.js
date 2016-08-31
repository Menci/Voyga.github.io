// Voyga

import "./directives";
import "./filters";

new Vue({

	el: "body",

	data() {

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

		accomplish() {

			const index = this.index.data;
			const days = moment().diff(moment(this.habits.data[index].start, "MM-DD-YYYY"), "days");

			if (this.ifAccomplished(index)) {

				this.habits.data[index].calendar[days] = false;

			} else {

				this.habits.data[index].calendar[days] = true;

			}

			this.habits.data[index].calendar = this.habits.data[index].calendar.slice();
			this.habits.save();

		},

		ifAccomplished(index) {

			const days = moment().diff(moment(this.habits.data[index].start, "MM-DD-YYYY"), "days");

			return this.habits.data[index].calendar[days];

		},

		getStreak(index) {

			const habit = this.habits.data[index];
			const length = habit.calendar.length;
			let streak = 0;

			for (let i = length - 2; i >= 0 ; i--) {

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

		add() {

			const habits = this.habits;
			const inputs = this.inputs;

			if (inputs.name && habits.data.length < 3 && habits.data.every(i => i.name !== inputs.name)) {

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

		delete() {

			this.habits.data.splice(this.index.data, 1);
			this.habits.save();
			this.toPage("main");

		},

		toPage(page) {

			this.page = page;
			Object.keys(this.status).forEach(i => this.status[i] = false);

		}

	},

	computed: {

		currentHabit() {

			return this.habits.data[this.index.data];

		},

		accomplished() {

			return this.ifAccomplished(this.index.data);

		},

		streak() {

			return this.getStreak(this.index.data);

		},

		since() {

			const start = moment(this.currentHabit.start, "MM-DD-YYYY");

			return start.format("MM") + " / " + start.format("DD");

		},

		empty() {

			return this.habits.data.length === 0;

		}

	},

	created() {

		for (let i = 0; i < this.habits.data.length; i++) {

			let days = moment().diff(moment(this.habits.data[i].start, "MM-DD-YYYY"), "days");

			for (let j = 0; j < days - this.habits.data[i].calendar.length + 1; j++) {

				this.habits.data[i].calendar.push(false);

			}

		}

		this.habits.save();

		if (!this.currentHabit) {

			this.index.set(this.habits.data.length - 1);

		}

	},

	ready() {

		CordovaUtils.ready(() => {

			CordovaUtils.back(() => {

				if (!Object.keys(this.status).every(i => !this.status[i])) {

					Object.keys(this.status).forEach(i => this.status[i] = false);

				} else if (this.page !== "main") {

					this.page = "main";

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
