document.addEventListener("DOMContentLoaded", function () {
    let circles = [];
    let color = "#b5d6a8";
    const circle = document.getElementById("circle");
    const btn = document.getElementsByClassName("btn");

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            color = window.getComputedStyle(this).getPropertyValue("background-color");
            e.stopPropagation();
        });
    }

    document.getElementById("reset").addEventListener("click", function (e) {
        circles = [];
        circle.innerHTML = "";
        e.stopPropagation();
    });

    document.addEventListener("click", drawCircle);

    function drawCircle(e) {
        let radius = Math.floor(Math.random() * (200 - 10)) + 10;
        circles.push({
            x: e.x - radius / 2,
            y: e.y - radius / 2,
            radius: radius,
            color: color,
        });
        displayCircle();
    }

    function displayCircle() {
        let output = "";
        for (let i = 0; i < circles.length; i++) {
            output +=
                "<p style='position:absolute; top:" + circles[i].y + "px; left:" + circles[i].x +
            "px; width:" + circles[i].radius + "px; height:" + circles[i].radius + 
            "px; border-radius:50%; border: 2px solid black;background-color: " + circles[i].color + "'></p>";
        }
        circle.innerHTML = output;
    }

    function shrinkCircle() {
        for (let i = 0; i < circles.length; i++) {
            if (circles[i].radius !== 0) {
                circles[i].radius -= 2;
            }
            if (circles[i].radius <= 0) {
                circles[i] = circles[circles.length - 1];
                circles.pop();
                clearInterval(shrinkCircle);
            }
        }
    }

    function loop() {
        shrinkCircle();
        displayCircle();
    }
    setInterval(loop, 200);
});