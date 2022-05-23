// // Manera de mutar con un ciclo for
// const letters = ["a", "b", "c"];

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//   const element = letters[index];
//   newArray.push(element + '++');
// }

// console.log('original',letters);
// console.log('arrayVacia',newArray);

// Manera de mutar con un .map

const letters = ["a", "b", "c"];
const newArrayMap = letters.map((item) => item + "++");

console.log("original", letters);
console.log("arrayVacia", newArrayMap);
