function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
};

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

const rect = new Rectangle('Rect', 10, 15);
const rect2 = new Rectangle('Rect 2', 30, 30);

console.log(rect.area(), rect.perimeter(), rect.isSquare());
console.log(rect2.area(), rect2.perimeter(), rect2.isSquare());
