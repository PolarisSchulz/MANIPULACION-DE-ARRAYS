// para ver el resultado podemos hacerlo en la consola directa con runner (extension)

// - For Each  
//     - Nos sirve para hacer un recorrido de los elementos de un array
//     - Solo hay que enviar la función usando ⇒ (arrow function), y dentro de esto hacer el algoritmo o ejecución.
//     - ⇒ Arrow Function: La funcion que se va a ejecutar por cada uno de los elementos. 
//     - For Each hace lo mismo que un For, pero como metodo solo se ocupa en arrays  

// Con un ciclo for
const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
const element = letters[index];
console.log("con for", element);
}

// Con un forEach
const letters2 = ["a", "b", "c"];

letters2.forEach((item) => console.log("con forEach", item));
