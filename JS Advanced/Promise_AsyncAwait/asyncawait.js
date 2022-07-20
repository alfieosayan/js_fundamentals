async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

let attempt = 0;

async function emitRandomNumber() {
	let random_number_generator = Math.floor(Math.random() * 101); // returns a random number from 0 - 100
	await sleep(2000);
	attempt++;
	if (random_number_generator < 80 && attempt != 10) {
		emitRandomNumber();
	} else {
		random_number_generator = `${random_number_generator}!!!`;
	}
	console.log(`
		Attempt#${attempt}. EmitRandomNumber is called.
		2 seconds have lasped.
		Random number generated is ${random_number_generator}.
		------
	`);
}

emitRandomNumber();
