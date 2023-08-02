function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width* this.height;
    }
};


const rec1 = new Rectangle('Rectangle 1', 10, 20);
const rec2 = new Rectangle('Rectangle 2', 20, 30);
const rec3 = new Rectangle('Rectangle 3', 30, 40);

// When you use the new keyword:
// 1. A new emply object is created
// 2. The constructor function is called with the arguments that we passed in.
// 3. The 'this' keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.
console.log(rec1, rec1.area());
console.log(rec2.area());
console.log(rec3.area());

console.log(rec1.constructor);
console.log(rec2 instanceof Rectangle);

