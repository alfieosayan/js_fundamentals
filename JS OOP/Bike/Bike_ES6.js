class Bike {
	constructor(price, max_speed) {
		this.price = price;
		this.max_speed = max_speed;
		this.miles = 0;
	}

	displayInfo() {
		console.log("Price is ", this.price);
		console.log("Max speed is ", this.max_speed);
		console.log("Total miles driven ", this.miles);
	}

	drive() {
		console.log("Driving..");
		this.miles += 10;
	}

	reverse() {
		console.log("Reversing..");
		if (this.miles > 5) {
			this.miles -= 5;
		}
	}
}

let bike1 = new Bike(500, 10);
let bike2 = new Bike(1000, 15);
let bike3 = new Bike(800, 20);
bike1.drive();
bike1.drive();
bike1.drive();
bike1.reverse();
bike1.displayInfo();

bike2.drive();
bike2.drive();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();

bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();
