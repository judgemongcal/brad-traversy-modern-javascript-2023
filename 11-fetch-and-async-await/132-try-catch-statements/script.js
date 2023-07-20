// try{
//     console.log(x);
// } catch (e) {
//     console.log('Error: ' +  e);
// };

function double(number){
    if (isNaN(number)){
        throw new Error(number + ' is not a number');
    }
    return number * 2;
};

try{
    const y = double('hello');
    console.log(y);
} catch(err) {
    console.log(err);
}