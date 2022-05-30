// Metodo que nos sirve para fucionar dos arrays

// concat es inmutable y no cambia el array original, solo nos retorna uno nuevo.

const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];

const newArray = elements;
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
console.log('con for', newArray);
// regresa: 'con for' [ 1, 2, 3, 4, 5, 6, 7, 8 ]


const concatMethod = elements.concat(otherElements);
console.log('Concat', concatMethod);
// regresa:  'Concat' [ 1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8 ]

// Acá tenemos un problema de que si lo enviamos de esta forma, se queda la referencia en memoria, si queremos arreglar esto en caso de que nos sucediera en algun trabajo, utilizariamos spread operator [...] para poder borrar la informacion en memoria, para que no sea necesario cambiar el nombre de las constantes de los arrays (esto solo en casod e que suceda) 


const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];

const newArray = [...elements]; //spread operator
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
console.log('con for', newArray);
// regresa: 'con for' [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// En concatMethod no es necesario spread operator [...] por que es inmutable
const concatMethod = elements.concat(otherElements);
console.log('Concat', concatMethod);
// 'Concat' [ 1, 2, 3, 4, 5, 6, 7, 8 ]


// Otra manera de hacer concat es con el mismo spread operator, clonando los elementos de un array, y clonando los elementos de otro array

// Pero solo lo va a hacer de una manera adecuada si es un array

const respuesta17 = elements.concat(otherElements);  
const respuesta18 = [...elements, ...otherElements];
const respuesta19 = [...elements, 'holi'];
const respuesta20 = [...elements, ...'holi2'];
console.log('for', newArray);  //for' [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log('concat', respuesta17); //'concat' [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log('...', respuesta18); //'...' [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log('holi', respuesta19);// 'holi' [ 1, 2, 3, 4, 'holi' ]
console.log('...holi2', respuesta20); //'...holi2' [ 1, 2, 3, 4, 'h', 'o', 'l', 'i', '2' ]


// ----------------------------

// Qué pasa si lo que quiero es realmente agregar los elementos a mi array original

elements.push(otherElements);
console.log('elements', elements) //'elements' [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]

// acá queremos concatenar los elementos, uno a uno.
elements.push(...otherElements);
console.log('elements', elements) //'elements' [ 1, 2, 3, 4, 5, 6, 7, 8 ]

