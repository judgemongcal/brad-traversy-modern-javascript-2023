const palindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    if(reversed === str){
        return 'PALINDROME';
    } else {
        return str;
    }
};

module.exports = palindrome;