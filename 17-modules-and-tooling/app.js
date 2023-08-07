const {capitalizeWords, makeMoney} = require('./utils');
const Person = require('./Person');
const person1 = new Person('Robert', 29);

console.log(capitalizeWords('lorem ipsum'));
console.log(makeMoney(5000));
person1.greet();
