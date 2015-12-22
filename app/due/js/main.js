// Voyga

V.init(function() {

	var App = new Vue({

		el: "body",

		ready: function() {

			V("#dueMonth").attr("placeholder", V.date().month());
			V("#dueDay").attr("placeholder", V.date().date());

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

			},

			deleteTask: {

				update: function(index) {

					var gesture = new Hammer(this.el),
						vm = this.vm;

					gesture.on("press", function() {

						vm.deletingTask = index;
						vm.status.deleting = true;

					});

				}

			},

			changeFormat: {

				isLiteral: true,

				update: function() {

					var element = V(this.el),
						date = this.expression,
						days = -V.date().diff(date),
						formats;

					if (days > 0) {

						var indicator = days > 1 ? "days" : "day";

						formats = ["<span>" + days + "</span><br />" + indicator, date.split("-")[1] + "-" + date.split("-")[2]];

					}

					else {

						formats = ["DUE!!!", date.split("-")[1] + "-" + date.split("-")[2]];

					}

					element.html(formats[parseInt(element.data("format"))]);

					element.on("click", function() {

						element.data("format", 1 - parseInt(element.data("format")));
						element.html(formats[parseInt(element.data("format"))]);

					});

				}

			}

		},

		filters: {

			limit: function(val, count) {

				if (val.length > count) {

					return val.substring(0, count);

				}

				else {

					return val;

				}

			},

			number: function(val) {

				return V.is(Number(val)).number() ? val : "";

			},

			statusColor: function(date) {

				var days = -V.date().diff(date);

				if (days >= 10) {

					return "#72e092";

				}

				else if (days >= 5 && days < 10) {

					return "#5f9bef";

				}

				else if (days < 5) {

					return "#ef6360";

				}

			}

		},

		data: {

			inputs: {

				taskName: "",
				dueMonth: "",
				dueDay: ""

			},

			tasks: V.storage("tasks", [

				{

					name: "Math Homework",
					date: V.date().calc("day", 4).format()

				},

				{

					name: "Her Birthday",
					date: V.date().calc("day", 8).format()

				},

				{

					name: "Final Test",
					date: V.date().calc("day", 16).format()

				}

			]),

			status: {

				deleting: false,
				adding: false

			},

			deletingTask: undefined

		},

		methods: {

			hideWindows: function() {

				for (var prop in this.status) {

					this.status[prop] = false;

				}

			},

			stopPropagation: function(event) {

				event.stopPropagation();

			},

			addTask: function() {

				var taskName = this.$eval("inputs.taskName"),
					dueMonth = this.$eval("inputs.dueMonth | limit 2"),
					dueDay = this.$eval("inputs.dueDay | limit 2"),
					dueYear = V.date().earlier("2015-" + dueMonth + "-" + dueDay) ? "2015" : "2016";

				if (!V.is(taskName).empty() &&
					!V.is(dueMonth).empty() &&
					!V.is(dueDay).empty()) {

					this.tasks.add({

						name: taskName,
						date: dueYear + "-" + dueMonth + "-" + dueDay

					});

					this.inputs.taskName = "";
					this.inputs.dueMonth = "";
					this.inputs.dueDay = "";
					this.hideWindows();

				}

			},

			deleteTask: function() {

				var index = this.deletingTask;

				if (V.is(index).number()) {

					this.tasks.data.splice(index, 1);
					this.tasks.save();
					this.deletingTask = undefined;
					this.hideWindows();

				}

			}

		},

		computed: {

			noTask: function() {

				return V.is(this.tasks.data).empty();

			}

		}

	});

	V.cordova.ready(function() {

		var Misc = {

			resize: function() {

				var body = V("body"),
					taskList = V("#taskList");

				taskList.width(body.width() >= 424 ? 360 : body.width() - 64);

			},

			fastclickInit: function() {

				FastClick.attach(V("body").el);

			}

		};

		Misc.resize();
		Misc.fastclickInit();

		V.resize(function() {

			Misc.resize();

		});

		V.cordova.back(function() {

			App.hideWindows();

		});

		V.cordova.hideSplashscreen();
		V("body").appear();

	});

});
