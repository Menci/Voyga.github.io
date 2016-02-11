// Voyga

import "./../lib/vue.min";
import "./../lib/fastclick.min";
import "./../lib/thumbs.min";
import "./../lib/moment.min";
import "./../lib/cordovaUtils.min";
import "./../lib/store.min";
import "./../lib/v.min";
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

			if (this.accomplished) {

				this.habits.data[index].last = moment().subtract(1, "d").format("MM-DD-YYYY");

			} else {

				this.habits.data[index].last = moment().format("MM-DD-YYYY");

			}

			this.habits.save();

		},

		ifAccomplished(index) {

			return this.habits.data[index].last === moment().format("MM-DD-YYYY");

		},

		getStreak(index) {

			const habit = this.habits.data[index];

			return moment(habit.last, "MM-DD-YYYY").diff(moment(habit.start, "MM-DD-YYYY"), "d") + 1;

		},

		add() {

			const habits = this.habits;
			const inputs = this.inputs;

			if (inputs.name && habits.data.length < 3 && habits.data.every(i => i.name !== inputs.name)) {

				habits.data.push({

					name: inputs.name,
					start: moment().format("MM-DD-YYYY"),
					last: moment().subtract(1, "d").format("MM-DD-YYYY")

				});

				habits.save();
				inputs.name = "";
				this.page = "main";
				this.status.adding = false;
				this.index.set(habits.data.length - 1);

			}

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

	ready() {

		for (let i = 0; i < this.habits.data.length; i++) {

			if (moment().diff(moment(this.habits.data[i], "MM-DD-YYYY"), "d") > 1) {

				this.habits.data[i].start = moment().format("MM-DD-YYYY");
				this.habits.data[i].last = moment().subtract(1, "d").format("MM-DD-YYYY");
				this.habits.save();

			}

		}

		if (!this.currentHabit) {

			this.index.set(this.habits.data.length - 1);

		}

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
