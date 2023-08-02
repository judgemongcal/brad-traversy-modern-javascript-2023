// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed


const rectObj = {
    name: 'Rect 1',
    width: 10,
    height: 10
};

Object.seal(rectObj)

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
// console.log(descriptors);

rectObj.color = 'red';
delete rectObj.name;
rectObj.width = 200;
console.log(rectObj);

const circObj = {
    name: 'Circ 1',
    radius: 10
};

Object.freeze(circObj);

let descriptorsCirc = Object.getOwnPropertyDescriptors(circObj);

circObj.color = 'blue';
delete circObj.radius;
circObj.name = 'Square';
console.log(descriptorsCirc);

console.log('RectObj is sealed? ', Object.isSealed(rectObj));
console.log('RectObj is frozen? ', Object.isFrozen(rectObj));
console.log('CircObj is sealed? ', Object.isSealed(circObj));
console.log('CircObj is frozen? ', Object.isFrozen(circObj));