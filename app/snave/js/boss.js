// Voyga

;(function() {

	function Laser(config) {

		this.shape = new createjs.Shape();
		config.stage.addChild(this.shape);

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

		init: function() {

			this.shape.x = this.initX;
			this.shape.y = this.initY;

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

		this.laserOne = new Laser({ stage: this.shape.stage, width: 18, height: 4, x: this.shape.x + 10, y: this.shape.y + 12 });
		this.laserTwo = new Laser({ stage: this.shape.stage, width: 18, height: 4, x: this.shape.x, y: this.shape.y + 12 });
		this.laserThree = new Laser({ stage: this.shape.stage, width: 4, height: 18, x: this.shape.x + 12, y: this.shape.y });
		this.laserFour = new Laser({ stage: this.shape.stage, width: 4, height: 18, x: this.shape.x + 12, y: this.shape.y + 10 });
		this.lasers = [this.laserOne, this.laserTwo, this.laserThree, this.laserFour];

		this.disappear();

	}

	Boss.prototype = {

		initLasers: function() {

			for (var i = 0; i < this.lasers.length; i++) {

				this.lasers[i].init();

			}

		},

		hideLasers: function() {

			for (var i = 0; i < this.lasers.length; i++) {

				this.lasers[i].disappear();

			}		

		},

		stop: function() {

			clearInterval(this.timer);
			cancelAnimationFrame(this.animation);

		},

		shoot: function() {

			function go() {

				this.animation = requestAnimationFrame(go.bind(this));

				if (this.laserOne.shape.x === this.laserOne.initX) {

					this.onShoot();

				}

				this.laserOne.shape.x += this.laserSpeed;
				this.laserTwo.shape.x -= this.laserSpeed;
				this.laserThree.shape.y -= this.laserSpeed;
				this.laserFour.shape.y += this.laserSpeed;

				if (this.laserTwo.shape.x <= -160) {

					this.initLasers();

				}

			}

			this.timer = setTimeout((function() {

				for (var i = 0; i < this.lasers.length; i++) {

					this.lasers[i].appear();

				}

				go.call(this);

			}).bind(this), 1000);

		},

		appear: function() {

			this.shape.visible = true;
			this.shape.stage.update();

		},

		disappear: function() {

			this.stop();
			this.hideLasers();
			this.initLasers();
			this.shape.visible = false;
			this.shape.stage.update();

		}

	};

	window.Boss = Boss;

})();
