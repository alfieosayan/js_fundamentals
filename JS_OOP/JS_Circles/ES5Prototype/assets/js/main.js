document.addEventListener("DOMContentLoaded", function () {
    function Circle() {
        this.x;
        this.y;
        this.radius;
        this.color = "#b5d6a8";
    }
    Circle.prototype.change_location = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Circle.prototype.change_radius = function (new_radius) {
        this.radius = new_radius;
    };

    Circle.prototype.change_color = function (new_color) {
        this.color = new_color;
    };

    var circle = new Circle();
    const circles = document.getElementById("circles");
    const btn = document.getElementsByClassName("btn");
    var reset = document.getElementById("reset");

    for (var i = 0; i < btn.length; i++) {
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
        var radius = Math.floor(Math.random() * (200 - 10)) + 10;
        circle.change_location(e.x, e.y);
        circle.change_radius(radius);
        output.style.cssText = `position: absolute; top: ${circle.y}px; left: ${circle.x}px; border-radius: 50%; border: 2px solid black; height: ${circle.radius}px; width: ${circle.radius}px; background-color: ${circle.color}`;

        var shrinkCircle = setInterval(function () {
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