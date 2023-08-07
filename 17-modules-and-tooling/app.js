// const {capitalizeWords, makeMoney} = require('./utils');
// const Person = require('./Person');
// const person1 = new Person('Robert', 29);

// console.log(capitalizeWords('lorem ipsum'));
// console.log(makeMoney(5000));
// person1.greet();


// const axios = require('axios');

// async function getPost() {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//     console.log(res.data);
// }

// getPost();


import {capitalizeWords, makeMoney} from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords('hello everyone'));
console.log(makeMoney(5000));

const person1 = new Person ('John', 40);
person1.greet();