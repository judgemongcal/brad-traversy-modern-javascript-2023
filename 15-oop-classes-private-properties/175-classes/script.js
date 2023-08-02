// function Rectangle(name, height, width) {
//   this.name = name;
//   this.height = height;
//   this.width = width;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.height + this.width);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.height === this.width;
// };

// Rectangle.prototype.logArea = function () {
//   console.log('Rectangle Area: ' + this.area());
// };

class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea();
