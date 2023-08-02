class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.width * this.height;
  }

  static getClass() {
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect.area());
// console.log(rect.getClass());
console.log(Rectangle.getClass());