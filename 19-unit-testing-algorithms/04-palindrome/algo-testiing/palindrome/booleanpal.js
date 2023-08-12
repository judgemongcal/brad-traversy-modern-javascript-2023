// Solution 1

// const booleanPal = (str) => {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// };

// Solution 2

const booleanPal = (str) => {
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1];
    })
}

module.exports = booleanPal;