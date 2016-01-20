// Voyga

function givePressingClass(el, className) {

	el = V(el);

	el.on("touchstart", function() {

		el.classList.add(className);

	});

	el.on("touchmove touchend", function() {

		el.classList.remove(className);

	});

}

Vue.directive("pressing-class", {

	isLiteral: true,

	bind: function() {

		givePressingClass(this.el, this.expression);

	}

});
