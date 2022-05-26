// - Map   
//     - Funciona para hacer transformaciones en arrays
//     - .map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.   
//     - Mantienes el mismo  número de elementos (length) que el array original.
//     - Te devuelve en el nuevo array.

// Manera de mutar con un ciclo for
const letters3 = ["a", "b", "c"];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters3[index];
  newArray.push(element + '++');
}

console.log('original',letters);
console.log('arrayVacia',newArray);

// Manera de mutar con un .map
const letters4 = ["a", "b", "c"];
const newArrayMap = letters4.map((item) => item + "++");

console.log("original", letters);
console.log("arrayVacia", newArrayMap);

// Por medio de un ejercicio
const solution(array) = [4,8,10,12];

function solution(array) {
 return newSolution = array.map((item => item*2));
}; 
console.logsolution([2, 4, 5, 6]);