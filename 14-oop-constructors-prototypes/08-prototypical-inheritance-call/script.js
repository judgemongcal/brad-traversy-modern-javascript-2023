function Shape(name) {
    this.name = name;
};

Shape.prototype.logName = function () {
    console.log(`Shape Name: ${this.name}`);
}

function Rectangle (name, height, width) {
    Shape.call(this, name);

    this.height = height;
    this.width = width;
};

function Circle (name, radius) {
    Shape.call(this, name);

    this.radius = radius;
};

// Inherits Shape Prototypes
Rectangle.prototype = Object.create(Shape.prototype);
Circle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.logName = function () {
    console.log(`Rectangle Name: ${this.name}`);
}

// Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle 1', 20, 20);
const circ = new Circle('Circle 1', 40);

// console.log(rect);
// console.log(circ);

rect.logName();
circ.logName();

console.log(rect.constructor);