// Voyga

;(function() {

	function Food(config) {

		this.shape = new createjs.Shape();
		config.stage.addChild(this.shape);

		this.color = "#42a3cc";
		this.width = 20;
		this.height = 20;
		this.initX = Math.floor(this.shape.stage.canvas.width * 0.7);
		this.initY = Math.floor(this.shape.stage.canvas.height * 0.2);
		this.init();

		this.shape.name = "food";
		this.shape.graphics.beginFill(this.color).drawRect(0, 0, this.width, this.height);

	}

	Food.prototype = {

		init: function() {

			this.shape.x = this.initX;
			this.shape.y = this.initY;

		},

		changePos: function() {

			this.shape.x = Math.floor(10 + (this.shape.stage.canvas.width - this.width - 20) * Math.random());
			this.shape.y = Math.floor(10 + (this.shape.stage.canvas.height - this.height - 20) * Math.random());

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

	window.Food = Food;

})();
