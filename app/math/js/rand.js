// Voyga

import "./../lib/is.min";

function randomNum(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);

}

function rand() {

	const args = Array.prototype.slice.call(arguments);

	if (args.length === 1 && is.array(args[0])) {

		return args[0][randomNum(0, args[0].length - 1)];

	} else if (args.length === 2 && is.number(args[0]) && is.number(args[1])) {

		return randomNum(args[0], args[1]);

	} else {

		return rand(args);

	}

}

export default rand;
