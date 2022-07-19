class Shape {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}

	change_color(new_color) {
		this.color = new_color;
	}

	change_location(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Circle extends Shape {
	constructor(x, y, color) {
		super(x, y, color);
		this.radius;
	}

	change_radius() {
		this.radius = "border-radius: 50%";
	}

	change_location(x, y) {
		super.change_location(x, y);
	}

	change_color(new_color) {
		super.change_color(new_color);
	}
}

class Square extends Shape {
	constructor(x, y, color) {
		super(x, y, color);
		this.color;
	}

	change_location(x, y) {
		super.change_location(x, y);
	}

	change_color(new_color) {
		super.change_color(new_color);
	}
}

class Rectangle extends Shape {
	constructor(x, y, color) {
		super(x, y, color);
		this.width;
	}

	change_location(x, y) {
		super.change_location(x, y);
	}

	change_color(new_color) {
		super.change_color(new_color);
	}

	change_width(new_width) {
		this.width = new_width;
	}
}
