const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym);
console.log(sym1.description);
console.log(sym.description);

// Symbols are unique
console.log(Symbol('sym') === Symbol('sym'));

const user = {
    [Symbol('id')] : 1,
    name: 'John',
    email: 'john@gmail.com'
};

console.log(user);
console.log(user['name']);
console.log(user[Symbol('id')]);

// Symbols are NOT enumerable
console.log(Object.keys(user));
console.log(Object.values(user));

for(let key in user) {
    console.log(key);
};

// Get own property symbols
console.log(Object.getOwnPropertySymbols(user));

// Symbol.for() - searches for existing symbols that have the same string as its description.
// If it finds one, it returns it. I not, it creates one with the string as its description.

const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4);

console.log(Symbol.keyFor(sym3));

console.log(sym1.toString());
console.log(sym3.toString());
console.log(sym.toString());

console.log(sym1.valueOf());
console.log(sym3.valueOf());
console.log(sym.valueOf());

console.log(Object.getOwnPropertyNames(Symbol));