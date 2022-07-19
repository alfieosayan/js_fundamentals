document.addEventListener("DOMContentLoaded", function () {
    let shape = new Square(0, 0, "#b5d6a8");
    const shapes = document.getElementById("shapes");
    let rec = "";
    const btn = document.getElementsByClassName("btn");
    const shape_btn = document.getElementsByClassName("shape");
    let reset = document.getElementById("reset");
    let active_shape = reset;

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            shape.change_color(window.getComputedStyle(this).getPropertyValue("background-color"));
            e.stopPropagation();
        });
    }

    for (let i = 0; i < btn.length; i++) {
        shape_btn[i].addEventListener("click", function (e) {
            active_shape.style.backgroundColor = "transparent";
            active_shape = this;
            console.log('this', this);
            this.style.backgroundColor = shape.color;
            if (this.id === "circle") {
                shape = new Circle(0, 0, shape.color);
                shape.change_radius();
                rec = "";
            } else if (this.id === "square") {
                shape = new Square(0, 0, shape.color);
                rec = "";
            } else {
                shape = new Rectangle(0, 0, shape.color);
                rec = "rectangle";
            }
            e.stopPropagation();
        });
    }

    reset.addEventListener("click", function (e) {
        shapes.innerHTML = "";
        e.stopPropagation();
    });

    document.addEventListener("click", function (e) {
        const output = document.createElement("p");
        let size = Math.floor(Math.random() * (200 - 10)) + 10; // random size from 10-200px
        let width = size;
        let height = size;
        if (rec === "rectangle") {
            width = size * 2;
        }
        shape.change_location(e.x, e.y);
        console.log(rec);
        output.style.cssText = `position: absolute; top: ${shape.y}px; left: ${shape.x}px; ${shape.radius}; border: 2px solid black; background-color: ${shape.color}`;
        let shrinkCircle = setInterval(function () {
            width -= 2;
            height -= 2;
            output.style.height = `${height}px`;
            output.style.width = `${width}px`;
            if (height && width < 0) {
                output.remove();
                clearInterval(shrinkCircle);
            }
        }, 200);

        shapes.append(output);
    });
});