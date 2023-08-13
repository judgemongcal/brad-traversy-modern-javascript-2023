// const anagram = (input, test) => {
//     let isTrue = false;
    
//     loop: for(const letter of test) {
//         if(input.length != test.length){
//             break loop;
//         }else if(input.includes(letter) === false){
//             break loop;
//         } else {
//             isTrue = true;
//             continue;

//         }
//     };

//     return isTrue;
// };


const anagram = (input, test) => {
    const map1 = buildCharMap(input);
    const map2 = buildCharMap(test);

    if(Object.keys(map1).length !== Object.keys(map2).length){
        return false;
    };

    for(let letter in map1) {
        if(map1[letter] !== map2[letter]) {
            return false;
        }
    };

    return true;
}

const buildCharMap = (str) => {
    const charMap = {};
    for(let letter of str.toLowerCase()){
        charMap[letter] = charMap[letter] + 1 || 1;
    }

    return charMap;
}

module.exports = anagram;
