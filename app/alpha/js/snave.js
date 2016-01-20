// Voyga

import playSound from "./sound";

function Tail(stage) {

	this.shape = new createjs.Shape();
	stage.addChild(this.shape);

	this.width = 24;
	this.height = 18;

	this.shape.name = "tail";
	this.shape.color = "#99c6e5";
	this.shape.graphics.beginFill(this.shape.color).drawRect(0, 0, 16, 2);
	this.shape.graphics.beginFill(this.shape.color).drawRect(0, 8, 24, 2);
	this.shape.graphics.beginFill(this.shape.color).drawRect(0, 16, 16, 2);
	this.shape.regX = this.width / 2;
	this.shape.regY = this.height / 2;

}

Tail.prototype = {

	rotate(dir) {

		const degrees = {

			left: 0,
			right: 180,
			up: 90,
			down: 270

			};

		this.shape.rotation = degrees[dir];

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

function Snave(config) {

	this.shape = new createjs.Shape();
	config.stage.addChild(this.shape);

	this.food = config.food;
	this.boss = config.boss;
	this.onGo = typeof config.onGo === "function" ? config.onGo.bind(this) : function() {};
	this.onDead = typeof config.onDead === "function" ? config.onDead.bind(this) : function() {};
	this.onEat = typeof config.onEat === "function" ? config.onEat.bind(this) : function() {};
	this.onMove = typeof config.onMove === "function" ? config.onMove.bind(this) : function() {};
	this.width = 32;
	this.height = 32;
	this.animation = 0;
	this.initSpeed = 3;
	this.initX = Math.floor(this.shape.stage.canvas.width * 0.2);
	this.initY = Math.floor(this.shape.stage.canvas.height * 0.7);

	this.shape.name = "snave";
	this.shape.color = "#99c6e5";

	this.shape.graphics.append(new createjs.Graphics.Rect(0, 0, this.width, this.height)).append({

		exec(ctx, shape) {

			ctx.fillStyle = shape.color;
			ctx.fill();

		}

	});

	this.tail = new Tail(this.shape.stage);
	this.setTailPos();

	this.init();

}

Snave.prototype = {

	init() {

		playSound("start");
		this.reverse = false;
		this.reversing = false;
		this.start = false;
		this.score = 0;
		this.dead = false;
		this.dir = null;
		this.enemy = "food";
		this.speed = this.initSpeed;
		this.shape.x = this.initX;
		this.shape.y = this.initY;
		this.alphaPoint = 50;
		this.alpha();

	},

	setTailPos() {

		if (this.dir) {

			this.tail.appear();

			if (this.dir === "left") {

				this.tail.shape.x = this.shape.x + this.width + 22;
				this.tail.shape.y = this.shape.y + this.height / 2;

			} else if (this.dir === "right") {

				this.tail.shape.x = this.shape.x - this.tail.width;
				this.tail.shape.y = this.shape.y + this.height / 2;

			} else if (this.dir === "up") {

				this.tail.shape.x = this.shape.x + this.width / 2;
				this.tail.shape.y = this.shape.y + this.height + 22;

			} else if (this.dir === "down") {

				this.tail.shape.x = this.shape.x + this.width / 2;
				this.tail.shape.y = this.shape.y - this.tail.width;

			}

		} else {

			this.tail.disappear();

		}

	},

	alpha() {

		this.shape.alpha = this.alphaPoint / 100;
		this.tail.shape.alpha = this.alphaPoint / 100;

	},

	fade(val = 30) {

		this.alphaPoint -= val;

		if (this.alphaPoint > 0) {

			this.alpha();

		} else {

			this.die();

		}

	},

	enhance(val = 2) {

		this.alphaPoint += val;

		if (this.alphaPoint <= 100) {

			this.alpha();

		}

	},

	stop() {

		cancelAnimationFrame(this.animation);

	},

	move(dir) {

		this.stop();

		if (!this.start) {

			playSound("go");
			this.onGo();
			this.start = true;

		}

		if (this.reversing) {

			this.reverse = !this.reverse;
			this.reversing = false;

		}

		const reverseDirs = {

			"left": "right",
			"right": "left",
			"up": "down",
			"down": "up"

		};

		if (this.reverse) {

			dir = reverseDirs[dir];

		}

		this.dir = dir;
		this.tail.rotate(this.dir);

		(function animate() {

			const dirMoves = {

				left() { this.shape.x -= this.speed; },
				right() { this.shape.x += this.speed; },
				up() { this.shape.y -= this.speed; },
				down() { this.shape.y += this.speed; }

			};

			this.animation = requestAnimationFrame(animate.bind(this));
			dirMoves[this.dir].call(this);
			this.setTailPos();
			this.onMove();

			this.hit(this.boss, () => {

				this.eat();
				this.speed += 1;
				this.boss.disappear();
				this.food.appear();
				this.enemy = "food";

			});

			this.hit(this.boss.lasers, () => {

				this.boss.initLasers();
				this.boss.stop();
				this.boss.shoot();
				this.fade();

			});

			this.hit(this.food, () => {

				this.eat();

			});

			this.out(() => {

				this.dir = reverseDirs[this.dir];
				this.tail.rotate(this.dir);
				this.fade();

			});

		}).call(this);

	},

	eat() {

		const bossTurn = 10;

		this.reversing = true;
		this.score += 1;
		this.onEat();

		if (this.enemy === "boss") {

			playSound("powerUp");
			this.enhance(10);

		} else {

			playSound("eat");
			this.enhance();

		}
			
		if ((this.score + 1) % bossTurn === 0 && (this.score + 1) >= bossTurn) {

			this.food.changePos(this.boss.shape.x + this.boss.width / 2, this.boss.shape.y + this.boss.height / 2);

		} else {

			this.food.changePos(this.shape.x + this.width / 2, this.shape.y + this.height / 2);

		}

		if (this.score % bossTurn === 0 && this.score >= bossTurn) {

			this.food.disappear();
			this.boss.appear();
			this.boss.shoot();
			this.enemy = "boss";

		}

	},

	die() {

		playSound("die");
		this.dead = true;
		this.stop();
		this.boss.stop();
		this.onDead();

	},

	hit(thing, callback) {

		const ifHit = (obj) => {

			if (obj.shape.isVisible()) {

				const x = this.shape.x;
				const y = this.shape.y;
				const size = this.width;
				const objX = obj.shape.x;
				const objY = obj.shape.y;
				const objWidth = obj.width;
				const objHeight = obj.height;

				return x + size >= objX && x <= objX + objWidth && y + size >= objY && y <= objY + objHeight;

			} else {

				return false;

			}

		};

		if (Array.isArray(thing)) {

			for (let i = 0; i < thing.length; i++) {

				this.hit(thing[i], callback);

			}

		} else {

			if (ifHit(thing)) {

				callback.call(this);

			}

		}

	},

	out(callback) {

		const x = this.shape.x;
		const y = this.shape.y;
		const size = this.width;
		const width = this.shape.stage.canvas.width;
		const height = this.shape.stage.canvas.height;

		if (x <= 0 || y <= 0 || x >= width - size || y >= height - size) {

			callback.call(this);

		}

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

export default Snave;
