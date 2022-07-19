document.addEventListener("DOMContentLoaded", function () {
    class Circle {
        constructor() {
            this.x;
            this.y;
            this.radius;
            this.color = "#b5d6a8";
        }

        change_location(x, y) {
            this.x = x;
            this.y = y;
        }

        change_radius(new_radius) {
            this.radius = new_radius;
        }

        change_color(new_color) {
            this.color = new_color;
        }
    }
    let circle = new Circle();
    const circles = document.getElementById("circles");
    const btn = document.getElementsByClassName("btn");
    let reset = document.getElementById("reset");

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            circle.change_color(
                window
                    .getComputedStyle(this)
                    .getPropertyValue("background-color")
            );
            e.stopPropagation();
        });
    }

    reset.addEventListener("click", function (e) {
        circles.innerHTML = "";
        e.stopPropagation();
    });

    document.addEventListener("click", function (e) {
        const output = document.createElement("p");
        let radius = Math.floor(Math.random() * (200 - 10)) + 10;
        circle.change_location(e.x, e.y);
        circle.change_radius(radius);
        output.style.cssText = `position: absolute; top: ${circle.y}px; left: ${circle.x}px; border-radius: 50%; border: 2px solid black; height: ${circle.radius}px; width: ${circle.radius}px; background-color: ${circle.color}`;

        let shrinkCircle = setInterval(function () {
            radius -= 2;
            output.style.height = `${radius}px`;
            output.style.width = `${radius}px`;
            if (radius <= 0) {
                output.remove();
                clearInterval(shrinkCircle);
            }
        }, 200);

        circles.append(output);
    });
});