function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
};


const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 30, 30);

console.log(rect1.name, rect2.area());

// Add Property
rect1.color ='red';

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

console.log(rect1, rect2.perimeter());

// Delete Property
console.log(rect2);
delete rect2.perimeter;
console.log(rect2);

// Check for property

console.log(rect2.hasOwnProperty('perimeter'));
console.log(rect1.hasOwnProperty('color'));

// Get Keys of Object
console.log(Object.keys(rect1));

// Get Values of Object
console.log(Object.values(rect2));

// Get Entries
console.log(Object.entries(rect1));

for (let[key, value] of Object.entries(rect2)) {
  if (typeof value !== 'function'){
    console.log(`${key} - ${value}`);
  }

}