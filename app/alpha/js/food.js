// Voyga

function Food(config) {

	this.shape = new createjs.Shape();
	config.stage.addChild(this.shape);

	this.width = 20;
	this.height = 20;
	this.initX = Math.floor(this.shape.stage.canvas.width * 0.7);
	this.initY = Math.floor(this.shape.stage.canvas.height * 0.2);
	this.init();

	this.shape.name = "food";
	this.shape.color = "#d2e2f1";
	this.shape.graphics.beginFill(this.shape.color).drawRect(0, 0, this.width, this.height);

}

Food.prototype = {

	init() {

		this.shape.x = this.initX;
		this.shape.y = this.initY;

	},

	changePos(avoidX, avoidY) {

		let x = Math.floor(10 + (this.shape.stage.canvas.width - this.width - 20) * Math.random());
		let y = Math.floor(10 + (this.shape.stage.canvas.height - this.height - 20) * Math.random());

		const generatePos = () => {

			x = Math.floor(10 + (this.shape.stage.canvas.width - this.width - 20) * Math.random());
			y = Math.floor(10 + (this.shape.stage.canvas.height - this.height - 20) * Math.random());

			if (Math.abs(x - avoidX) < 48 || Math.abs(y - avoidY) < 48) {

				generatePos();

			}

		};

		if (avoidX && avoidY) {

			generatePos();

		}

		this.shape.x = x;
		this.shape.y = y;

	},

	appear() {

		this.shape.visible = true;
		this.shape.stage.update();

	},

	disappear() {

		this.shape.visible = false;
		this.shape.stage.update();

	}

};

export default Food;
