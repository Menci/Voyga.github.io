// Voyga

Vue.filter("pluralfy", (val, number) => {

	if (number > 1) {

		return val + "s";

	} else {

		return val;

	}

});
