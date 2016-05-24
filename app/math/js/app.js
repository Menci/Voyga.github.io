// Voyga

import "./../lib/vue.min";
import "./../lib/fastclick.min";
import "./../lib/thumbs.min";
import "./../lib/cordovaUtils.min";
import "./../lib/store.min";
import "./../lib/v.min";
import "./directives";
import rand from "./rand";

new Vue({

	el: "body",

	data() {

		return {

			equation: "1+1=",
			answer: 2,

			questions: [

				"addition",
				"subtraction",
				"multiply",
				"division"

			],

			status: {

				answered: false,
				bar: 80

			}

		};

	},

	methods: {

		next() {

			if (this.status.answered) {

				this.generate();

			}

		},

		generate() {

			const { equation, answer } = this[rand(this.questions)]();

			this.status.answered = false;
			this.equation = equation;
			this.answer = answer;

		},

		addition() {

			const first = rand(100, 999);
			const second = rand(100, 999);

			return {

				equation: first + "+" + second + "=",
				answer: first + second

			};

		},

		addition() {

			const first = rand(100, 999);
			const second = rand(100, 999);

			return {

				equation: (first + second) + "−" + first + "=",
				answer: second

			};

		},

		multiply() {

			const first = rand(10, 99);
			const second = rand(10, 99);

			return {

				equation: first + "×" + second + "=",
				answer: first * second

			};

		},

		division() {

			const first = rand(10, 99);
			const second = rand(10, 99);

			return {

				equation: (first * second) + "÷" + first + "=",
				answer: second

			};

		}

	},

	computed: {

		// ...

	},

	ready() {

		this.generate();

		CordovaUtils.ready(() => {

			CordovaUtils.splashscreen.hide();
			FastClick.attach(V("body").el);
			V("body").appear();

		});

	}

});