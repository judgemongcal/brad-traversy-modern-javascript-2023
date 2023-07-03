// Challenge 1
const getCelsius = fahr => ((fahr - 32) * 5) / 9;


let fahrIn = 67;

console.log(`The temperature is ${getCelsius(fahrIn)}\xB0C`);

// Challenge 2

const arrNum = [1, 2, 3, 4, 5];

const minMax = arr =>{
    let min = Math.min(...arr); 
    let max = Math.max(...arr);

    return {min: min, max: max};
};

console.log(minMax(arrNum));

// Challenge 3

((length, width) => { 
    const area = length * width;

    const output = `The area of a rectangle withe length of ${length} and a width of ${width} is ${area}`;

    console.log(output);
})(10, 5);
