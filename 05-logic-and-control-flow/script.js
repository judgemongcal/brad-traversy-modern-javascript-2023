const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);

const operations = ['+', '-', '*', '/', '%', '[', '@'];

const chosenOperation = operations[Math.floor(Math.random() * operations.length)];
console.log(operations, chosenOperation);

const calc = (num1, num2, op) => {
    switch (op) {
        case '+': console.log(`${num1} + ${num2} = ${num1+num2}`); break;
        case '-': console.log(`${num1} - ${num2} = ${num1-num2}`); break;
        case '*': console.log(`${num1} * ${num2} = ${num1*num2}`); break;
        case '/': console.log(`${num1} / ${num2} = ${num1/num2}`); break;
        case '%': console.log(`${num1} % ${num2} = ${num1%num2}`); break;
        default: console.log(`Error! Operation (${op}) is invalid.`);
    }
}

calc(num1, num2, chosenOperation);