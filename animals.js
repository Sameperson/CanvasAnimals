var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function Animal() {
    this.x = Math.floor(Math.random() * (canvas.width - 40)) + 20;
    this.y = Math.floor(Math.random() * (canvas.height - 40)) + 20;
    this.dy = Math.floor(Math.random() * 4) - 2;
    this.dx = Math.floor(Math.random() * 4) - 2;
}

Animal.prototype.x = Math.floor(Math.random() * (canvas.width - 40)) + 20;
Animal.prototype.y = Math.floor(Math.random() * (canvas.height - 40)) + 20;

Animal.prototype.update = function () {
    this.x += this.dx;
    this.y += this.dy;
    if(this.x > canvas.width - 20 || this.x < 20) {
        this.dx = -this.dx;
    }
    if(this.y > canvas.height - 20 || this.y < 20) {
        this.dy = -this.dy;
    }
}
Animal.prototype.draw = function ()  {
    context.beginPath();
    context.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = this.circleColor;
    context.fill();
    context.fillStyle = 'white';
    context.font = "30px Arial";
    context.fillText(this.letter, this.x - 10, this.y + 10);
}

function Bird() {
    Animal.call(this);
    this.t = Math.floor(Math.random() * 4);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.letter = "B";
Bird.prototype.circleColor = "red";
Bird.prototype.update = function () {
    this.t++;
    this.y += Math.sin(this.t/30);
}

function Cat() {
    Animal.call(this);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.letter = "C";
Cat.prototype.circleColor = "blue";

function Dog() {
    Animal.call(this);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.letter = "D";
Dog.prototype.circleColor = "green";

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



