var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function Animal() {
    this.x = Math.floor(Math.random() * (canvas.width - 40)) + 20;
    this.y = Math.floor(Math.random() * (canvas.height - 40)) + 20;
    this.dy = Math.floor(Math.random() * 4) - 2;
    this.dx = Math.floor(Math.random() * 4) - 2;
    this.letter = 'A';
    this.circleColor = 'black';
    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = this.circleColor;
        context.fill();
        context.fillStyle = 'white';
        context.font = "30px Arial";
        context.fillText(this.letter, this.x - 10, this.y + 10);
    }
    this.update = function () {
        this.x += this.dx;
        this.y += this.dy;
        if(this.x > canvas.width - 20 || this.x < 20) {
            this.dx = -this.dx;
        }
        if(this.y > canvas.height - 20 || this.y < 20) {
            this.dy = -this.dy;
        }
    }
}

function Bird() {
    this.t = Math.floor(Math.random() * 4);
    Animal.call(this);
    this.letter = "B";
    this.circleColor = "red";
    this.update = function () {
        this.t++;
        this.y += Math.sin(this.t/30);
    }
}

function Cat() {
    Animal.call(this);
    this.letter = "C";
    this.circleColor = "blue";
}

function Dog() {
    Animal.call(this);
    this.letter = "D";
    this.circleColor = "green";
}

var bird1 = new Bird();
var bird2 = new Bird();
var cat1 = new Cat();
var cat2 = new Cat();
var dog1 = new Dog();
var dog2 = new Dog();

var population = [bird1, bird2, cat1, cat2, dog1, dog2];

setTimeout(function() {
    var interval = setInterval(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < population.length; i++) {
            population[i].draw();
            population[i].update();
        }
    }, 0);
}, 500);



