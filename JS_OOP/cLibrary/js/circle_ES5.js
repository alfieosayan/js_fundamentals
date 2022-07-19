function Circles(number) {
	this.number = number;
	this.expand_size;

	this.draw_circles = function (element) {
        let circles = document.getElementById(element);
        
		for (let i = 0; i < this.number; i++) {
			let output = document.createElement("p");
			let size = Math.floor(Math.random() * (200 - 10)) + 10; // random circle size from 10-200px
			let random_color = Math.floor(Math.random() * 16777215).toString(16); // random hex color
			let x = Math.floor(Math.random() * 1080); // random x location on the screen
			let y = Math.floor(Math.random() * 1080); // random y location on the screen

			output.style.cssText = `position: absolute; top: ${y}px; left: ${x}px; border-radius: 50%; border: 2px solid black; height: ${size}px; width: ${size}px; background-color: #${random_color}`;

			let expand_size = this.expand_size;

			setInterval(function () {
				size += 2;
				output.style.height = `${size}px`;
				output.style.width = `${size}px`;
				if (size >= expand_size) {
					output.remove();
					clearInterval();
				}
			}, 200);

			circles.append(output);
		}
	};

	this.expand_circles = function (size) {
		this.expand_size = size;
	};
}
