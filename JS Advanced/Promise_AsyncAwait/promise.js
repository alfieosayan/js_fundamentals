let attempt = 0;

function emitRandomNumber() {
	let random_number_generator = Math.floor(Math.random() * 101); // returns a random number from 0 - 100
	new Promise(function (resolve, reject) {
		setTimeout(function () {
			attempt++;
			if (random_number_generator < 80 && attempt != 10) {
				resolve();
			} else {
				random_number_generator = `${random_number_generator}!!!`;
			}

			console.log(`
			Attempt#${attempt}. EmitRandomNumber is called.
			2 seconds have lasped.
			Random number generated is ${random_number_generator}.
			------
		`);
		}, 2000);
	})
		.then(emitRandomNumber)
		.catch();
}

emitRandomNumber();
