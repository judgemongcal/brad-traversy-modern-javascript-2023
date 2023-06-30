const myString = 'developer';

const myNewString = myString[0].toUpperCase() + myString.substring(1);

const myNewString2 = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString, myNewString2);