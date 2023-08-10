const set = new Set([1,2,3,4,4,4,4,4,4]);


set.add(5);

console.log(set.has(6));
console.log(set.has(1));

set.delete(2);
console.log(set);

const setArray = Array.from(set);

console.log(setArray);

for(let item of set){
    console.log(item);
}

const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

set.clear();

console.log(set);