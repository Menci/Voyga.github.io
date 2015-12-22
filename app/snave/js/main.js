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

		data: {

			stage: null,
			food: null,
			snave: null,
			status: "normal",
			record: V.storage("record", 0)

		},

		methods: {

			move: function(dir) {

				if (this.status === "normal") {

					this.snave.move(dir);

				}

			},

			init: function() {

				if (this.status === "dead") {

					this.snave.init();
					this.food.init();
					this.status = "normal";
					this.playSound("start");

				}

			},

			playSound: function(id) {

				var files = {

					eat: "sound/eat.wav",
					go: "sound/go.wav",
					start: "sound/start.wav",
					die: "sound/die.wav",
					shoot: "sound/shoot.wav",
					powerUp: "sound/powerUp.wav"

				};

				if (files[id] !== undefined) {

					new Audio(files[id]).play();

				}

			}

		},

		computed: {

			text: function() {

				return this.snave.score;

			},

			showingLayer: function() {

				return this.status !== "normal";

			}

		},

		created: function() {

			var bodyWidth = V("body").width();
			var bodyHeight = V("body").height();
			var stageSize = (bodyWidth - 64) > 360 ? 360 : (bodyWidth - 64);

			V("#stageBox").width(stageSize).height(stageSize);

			V("#stage").attr({

				width: stageSize - 8,
				height: stageSize - 8

			});

			var buttonBox = V("#buttonBox");
			var buttons = V(".buttons");
			var buttonBoxHeight = bodyHeight - 32 - stageSize - 24 - 32;
			var buttonHeight = (buttonBoxHeight - 36) / 3;
			var buttonWidth = buttonHeight * 2;
			var buttonBoxWidth = buttonWidth * 2 + 18;

			buttonBox.width(buttonBoxWidth);
			buttonBox.height(buttonBoxHeight);

			for (var i = 0; i < buttons.length; i++) {

				buttons[i].width(buttonWidth);
				buttons[i].height(buttonHeight);

			}

		},

		ready: function() {

			var self = this;

			this.stage = new createjs.Stage("stage");
			this.food = new Food({ stage: this.stage });

			this.boss = new Boss({

				stage: this.stage,

				onShoot: function() {

					self.playSound("shoot");

				}

			});

			this.snave = new Snave({

				stage: this.stage,
				food: this.food,
				boss: this.boss,

				onGo: function() {

					self.playSound("go");

				},

				onEat: function() {

					if (this.enemy === "boss") {

						self.playSound("powerUp");

					} else {

						self.playSound("eat");

					}

				},

				onDead: function() {

					self.playSound("die");
					self.status = "dead";

					if (this.score > self.record.data) {

						self.record.set(this.score);

					}

				}

			});

			this.stage.update();

		},

		watch: {

			showingLayer: function() {

				if (this.showingLayer === true) {

					this.snave.disappear();
					this.snave.tail.disappear();
					this.boss.disappear();
					this.food.disappear();

				} else {

					this.snave.appear();
					this.food.appear();

				}

			}

		}

	});

	V.cordova.ready(function() {

		FastClick.attach(V("body").el);
		App.playSound("start");
		V.cordova.splashscreen.hide();
		V("body").appear();

	});

});
