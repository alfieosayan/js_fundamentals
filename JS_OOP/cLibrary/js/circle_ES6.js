class Circles {
	constructor(number) {
		this.number = number;
		this.expand_size;
	}

	draw_circles(element) {
		const circles = document.getElementById(element);
        
		for (let i = 0; i < this.number; i++) {
			const output = document.createElement("p");
			let size = Math.floor(Math.random() * (200 - 10)) + 10;
			let random_color = Math.floor(Math.random() * 16777215).toString(16);
			let x = Math.floor(Math.random() * 1080);
            let y = Math.floor(Math.random() * 1080);

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
	}

	expand_circles(size) {
		this.expand_size = size;
	}
}
