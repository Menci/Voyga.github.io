// Voyga

;(function() {

	function Tail(stage) {

		this.shape = new createjs.Shape();
		stage.addChild(this.shape);

		this.color = "#60c1ea";
		this.width = 24;
		this.height = 18;

		this.shape.name = "tail";
		this.shape.graphics.beginFill(this.color).drawRect(0, 0, 16, 2);
		this.shape.graphics.beginFill(this.color).drawRect(0, 8, 24, 2);
		this.shape.graphics.beginFill(this.color).drawRect(0, 16, 16, 2);
		this.shape.regX = this.width / 2;
		this.shape.regY = this.height / 2;

	}

	Tail.prototype = {

		rotate: function(dir) {

			var degrees = {

				left: 0,
				right: 180,
				up: 90,
				down: 270

			};

			this.shape.rotation = degrees[dir];

		},

		appear: function() {

			this.shape.visible = true;
			this.shape.stage.update();

		},

		disappear: function() {

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
		this.color = "#60c1ea";
		this.width = 36;
		this.height = 36;
		this.animation = 0;
		this.initSpeed = 3;
		this.initX = Math.floor(this.shape.stage.canvas.width * 0.2);
		this.initY = Math.floor(this.shape.stage.canvas.height * 0.7);
		this.init();

		this.shape.name = "snave";
		this.shape.graphics.setStrokeStyle(2).beginStroke(this.color).drawRect(0, 0, this.width, this.height);
		this.shape.graphics.beginFill(this.color).drawRect(5, 5, this.width - 10, this.height - 10);

		this.tail = new Tail(this.shape.stage);
		this.setTailPos();

	}

	Snave.prototype = {

		init: function() {

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

		},

		setTailPos: function() {

			if (this.dir) {

				this.tail.appear();

				if (this.dir === "left") {

					this.tail.shape.x = this.shape.x + this.width + 22;
					this.tail.shape.y = this.shape.y + 18;

				} else if (this.dir === "right") {

					this.tail.shape.x = this.shape.x - this.tail.width;
					this.tail.shape.y = this.shape.y + 18;

				} else if (this.dir === "up") {

					this.tail.shape.x = this.shape.x + 18;
					this.tail.shape.y = this.shape.y + this.height + 22;

				} else if (this.dir === "down") {

					this.tail.shape.x = this.shape.x + 18;
					this.tail.shape.y = this.shape.y - this.tail.width;

				}

			} else {

				this.tail.disappear();

			}

		},

		stop: function() {

			cancelAnimationFrame(this.animation);

		},

		move: function(dir) {

			if (this.start === false) {

				this.onGo();
				this.start = true;

			}

			if (this.reversing === true) {

				this.reverse = !this.reverse;
				this.reversing = false;

			}

			var reversedDirs = {

				"left": "right",
				"right": "left",
				"up": "down",
				"down": "up"

			};

			if (this.reverse === true) {

				dir = reversedDirs[dir];

			}

			this.dir = dir;
			this.tail.rotate(this.dir);

			var dirMoves = {

				"left": function() { this.shape.x -= this.speed; },
				"right": function() { this.shape.x += this.speed; },
				"up": function() { this.shape.y -= this.speed; },
				"down": function() { this.shape.y += this.speed; }

			};

			this.stop();

			(function animate() {

				this.animation = requestAnimationFrame(animate.bind(this));
				dirMoves[this.dir].call(this);
				this.setTailPos();
				this.onMove();

				this.hit(this.boss, function() {

					this.eat();
					this.speed += 1;
					this.boss.disappear();
					this.food.appear();
					this.enemy = "food";

				});

				this.hit(this.boss.lasers, function() {

					this.die();

				});

				this.hit(this.food, function() {

					this.eat();

				});

				this.out(function() {

					this.die();

				});

			}).call(this);

		},

		eat: function() {

			this.reversing = true;
			this.score += 1;
			this.onEat();
			this.food.changePos();

			if (this.score % 10 === 0 && this.score >= 10) {

				this.food.disappear();
				this.boss.appear();
				this.boss.shoot();
				this.enemy = "boss";

			}

		},

		die: function() {

			this.dead = true;
			this.stop();
			this.boss.stop();
			this.onDead();

		},

		hit: function(thing, callback) {

			var ifHit = (function(obj) {

				if (obj.shape.isVisible()) {

					var x = this.shape.x;
					var y = this.shape.y;
					var size = this.width;
					var objX = obj.shape.x;
					var objY = obj.shape.y;
					var objWidth = obj.width;
					var objHeight = obj.height;

					return x + size >= objX && x <= objX + objWidth && y + size >= objY && y <= objY + objHeight;

				} else {

					return false;

				}

			}).bind(this);

			if (Array.isArray(thing)) {

				for (var i = 0; i < thing.length; i++) {

					this.hit(thing[i], callback);

				}

			} else {

				if (ifHit(thing)) {

					callback.call(this);

				}

			}

		},

		out: function(callback) {

			var x = this.shape.x;
			var y = this.shape.y;
			var size = this.width;
			var width = this.shape.stage.canvas.width;
			var height = this.shape.stage.canvas.height;

			if (x <= 0 || y <= 0 || x >= width - size || y >= height - size) {

				callback.call(this);

			}

		},

		appear: function() {

			this.shape.visible = true;
			this.shape.stage.update();

		},

		disappear: function() {

			this.shape.visible = false;
			this.shape.stage.update();

		}

	};

	window.Snave = Snave;

})();
