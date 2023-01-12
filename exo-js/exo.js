// Exo 1
const table = [1,3,4,56,4,7]
function findLargestNumber (numbers){
    return Math.max(...numbers);
}
console.log('Exo 1: ',findLargestNumber(table)); // 56


// Exo 2
const Tablewords = ['cherry', 'apple', 'blueberry'];

function sortWords(words) {
    return words.sort((a, b) => a.localeCompare(b));
}
console.log('Exo 2: ',sortWords(Tablewords)); // apple,blueberry,cherry


// Exo 3
const words = 'hello world';
const charac = 'o';

function countOccurrences(string, character){
    let count = 0;
  for (const c of string) {
    if (c.includes(character)) {
      count += 1;
    }
  }
  return count;
}
console.log('Exo 3: ',countOccurrences(words,charac)); // 2


// Exo 4
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function flattenArray(array) {
    return array.flat();
}
console.log('Exo 4: ',flattenArray(array)); // 1,2,3,4,5,6,7,8,9


// Exo 5
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function removeDupes(table){
    return Array.from(new Set(table))
}
console.log('Exo 5: ',removeDupes(numbers)); // 1,2,3,4


// Exo 6
let x = 1;
let y = 2;

function swapVariables(x, y) {
    return [y, x];
}
console.log('Exo 6: ',swapVariables(x,y)); // 2, 1


// Exo 7
const object = {a: 1, b: 2, c: 3};

function parseObject(obj) {
    return Object.entries(obj).map(([, value]) => value);
}
console.log('Exo 7: ',parseObject(object)); // 1, 2, 3

// Exo 8
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };

function mergeObjects(obj1, obj2){
    return { ...obj1, ...obj2 };
}
console.log('Exo 8: ',mergeObjects(object1, object2)); // 1, 2, 3, 4


// Exo 9
const tableNumbers = [1,2,3,4,5,6]

function sumArray (numbers)
  {
    const initalValue = 0;
    const sumNumbers = numbers.reduce(
      (add, currentValue) => add + currentValue, initalValue);
    return sumNumbers
  }
  console.log('Exo 9:',sumArray(tableNumbers));

// Exo 10
const objj = {a: 9, c: 5, b: 2}

function sortObject (object10)
{
    const tabSort = (tabObject10) => tabObject10.sort();
    console.log("Exo 10: ", tabSort([...Object.entries(object10)]));
    return tabSort
}

sortObject(objj);
