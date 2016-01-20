// Voyga

export default function(sound) {

	const files = {

		eat: "sound/eat.wav",
		go: "sound/go.wav",
		start: "sound/start.wav",
		die: "sound/die.wav",
		shoot: "sound/shoot.wav",
		powerUp: "sound/powerUp.wav"

	};

	if (files[sound]) {

		new Audio(files[sound]).play();

	}

}
