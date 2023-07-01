// Challenge 1

const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.unshift(6);
arr.push(0);

console.log(arr);


// Challenge 2 

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

  // Solution 1
const arr3 = arr1.concat(arr2);

arr3.splice(4,1);

  // Solution 2  
const arr4 = arr1.splice(0,4).concat(arr2);


console.log(arr3, arr4); 