// Voyga

import "./../lib/vue.min";
import "./../lib/easel.min";
import "./../lib/thumbs.min";
import "./../lib/fastclick.min";
import "./../lib/store.min";
import "./../lib/cordovaUtils.min";
import "./../lib/v.min";
import "./directives";
import Snave from "./snave";
import Food from "./food";
import Boss from "./boss";

new Vue({

	el: "body",

	data: {

		stage: null,
		food: null,
		snave: null,
		status: "normal",
		record: new Store("record", 0)

	},

	methods: {

		move(dir) {

			if (this.status === "normal") {

				this.snave.move(dir);

			}

		},

		init() {

			if (this.status === "dead") {

				this.snave.init();
				this.food.init();
				this.status = "normal";

			}

		}

	},

	created() {

		const bodyWidth = V("body").width();
		const bodyHeight = V("body").height();
		const stageSize = (bodyWidth - 64) > 360 ? 360 : (bodyWidth - 64);

		V("#stageBox").width(stageSize).height(stageSize);

		V("#stage").attr({

			width: stageSize - 8,
			height: stageSize - 8

		});

		const buttonBox = V("#buttonBox");
		const buttons = V(".buttons");
		const buttonBoxHeight = bodyHeight - 32 - stageSize - 24 - 32;
		const buttonHeight = (buttonBoxHeight - 36) / 3;
		const buttonWidth = buttonHeight * 2;
		const buttonBoxWidth = buttonWidth * 2 + 18;

		buttonBox.width(buttonBoxWidth);
		buttonBox.height(buttonBoxHeight);

		for (let i = 0; i < buttons.length; i++) {

			buttons[i].width(buttonWidth);
			buttons[i].height(buttonHeight);

		}

	},

	ready() {

		const self = this;

		this.stage = new createjs.Stage("stage");
		this.food = new Food({ stage: this.stage });

		this.boss = new Boss({

			stage: this.stage

		});

		this.snave = new Snave({

			stage: this.stage,
			food: this.food,
			boss: this.boss,

			onDead() {

				self.status = "dead";

				if (this.score > self.record.data) {

					self.record.set(this.score);

				}

			}

		});

		this.stage.update();

		CordovaUtils.ready(() => {

			FastClick.attach(V("body").el);
			CordovaUtils.splashscreen.hide();
			V("body").appear();

		});

	},

	watch: {

		status() {

			if (this.status !== "normal") {

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
