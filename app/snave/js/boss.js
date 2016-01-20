// Voyga

import playSound from "./sound";

function Laser(config) {

	this.shape = new createjs.Shape();
	config.stage.addChild(this.shape);

	this.move = typeof config.move === "function" ? config.move.bind(this) : function() {};
	this.color = "#58d9aa";
	this.width = config.width;
	this.height = config.height;

	this.shape.name = "laser";
	this.shape.graphics.beginFill(this.color).drawRect(0, 0, this.width, this.height);
	this.initX = config.x;
	this.initY = config.y;

	this.init();

}

Laser.prototype = {

	init() {

		this.shape.x = this.initX;
		this.shape.y = this.initY;

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

function Boss(config) {

	this.shape = new createjs.Shape();
	config.stage.addChild(this.shape);

	this.onShoot = typeof config.onShoot === "function" ? config.onShoot.bind(this) : function() {};
	this.animation = 0;
	this.timer = 0;
	this.color = "#58d9aa";
	this.width = 28;
	this.height = 28;
	this.laserSpeed = 2;
	this.shape.x = Math.floor(this.shape.stage.canvas.width * 0.5 - this.width / 2);
	this.shape.y = Math.floor(this.shape.stage.canvas.height * 0.5 - this.height / 2);

	this.shape.name = "boss";
	this.shape.graphics.beginFill(this.color).drawRect(0, 0, this.width, this.height);

	this.laserOne = new Laser({

		stage: this.shape.stage,
		width: 18,
		height: 4,
		x: this.shape.x + 10,
		y: this.shape.y + 12,
		move() { this.shape.x += 2; }

	});

	this.laserTwo = new Laser({

		stage: this.shape.stage,
		width: 18,
		height: 4,
		x: this.shape.x,
		y: this.shape.y + 12,
		move() { this.shape.x -= 2; }

	});

	this.laserThree = new Laser({

		stage: this.shape.stage,
		width: 4,
		height: 18,
		x: this.shape.x + 12,
		y: this.shape.y,
		move() { this.shape.y -= 2; }

	});

	this.laserFour = new Laser({

		stage: this.shape.stage,
		width: 4,
		height: 18,
		x: this.shape.x + 12,
		y: this.shape.y + 10,
		move() { this.shape.y += 2; }

	});

	this.lasers = [

		this.laserOne,
		this.laserTwo,
		this.laserThree,
		this.laserFour

	];

	this.disappear();

}

Boss.prototype = {

	loopLasers(callback) {

		for (let i = 0; i < this.lasers.length; i++) {

			callback(this.lasers[i], i);

		}

	},

	initLasers() {

		this.loopLasers((laser) => { laser.init(); });

	},

	hideLasers() {

		this.loopLasers((laser) => { laser.disappear(); });

	},

	stop() {

		clearInterval(this.timer);
		cancelAnimationFrame(this.animation);

	},

	shoot() {

		const go = () => {

			this.animation = requestAnimationFrame(go);

			if (this.laserTwo.shape.x <= -160) {

				this.initLasers();

			}

			if (this.laserOne.shape.x === this.laserOne.initX) {

				playSound("shoot");
				this.onShoot();

			}

			this.loopLasers((laser) => { laser.move(); });

		};

		this.timer = setTimeout(() => {

			for (let i = 0; i < this.lasers.length; i++) {

				this.lasers[i].appear();

			}

			go();

		}, 500);

	},

	appear() {

		this.shape.visible = true;
		this.shape.stage.update();

	},

	disappear() {

		this.stop();
		this.hideLasers();
		this.initLasers();
		this.shape.visible = false;
		this.shape.stage.update();

	}

};

export default Boss;
