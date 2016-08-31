// Voyga

Vue.directive("pressing-class", {

	isLiteral: true,

	bind() {

		const element = V(this.el);
		const className = this.expression;

		element.on("touchstart", () => {

			element.classList.add(className);

		});

		element.on("touchmove touchend", () => {

			element.classList.remove(className);

		});

	}

});

Vue.directive("icon", {

	bind() {

		const element = V(this.el);
		const icon = this.expression;

		element.classList.add("iconBox");
		element.html("<i class='icon icon-" + icon + " center'></i>")

	}

});
