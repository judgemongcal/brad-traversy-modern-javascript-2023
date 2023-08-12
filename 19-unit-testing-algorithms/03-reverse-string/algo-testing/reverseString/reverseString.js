// Solution 1

// const reverseString = (string) => {
//     let output = '';
//     for(let i = string.length - 1; i >= 0; i--){
//         output += string[i];
//     };

//     return output;
// };


// Solution 2
// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// }

// Solution 3
const reverseString = (str) => {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverseString;