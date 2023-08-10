const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'blue');
myMap.set(2, 'green');

console.log(myMap.get(2));
console.log(myMap.get('name'));

console.log(myMap.size);

console.log(myMap.has('foo'));

myMap.delete(2);

console.log(myMap);

const peopleMap = new Map();
peopleMap.set('brad', {phone: 111111, email: 'brad@gmail.com'});
peopleMap.set('levi', {phone: 222222, email: 'levi@gmail.com'});
peopleMap.set('kim', {phone: 333333, email: 'kim@gmail.com'});

peopleMap.forEach((person) => console.log(person.phone + " " + person.email));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);

console.log(peopleArray);