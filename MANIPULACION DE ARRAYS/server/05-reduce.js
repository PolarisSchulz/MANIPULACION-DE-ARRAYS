// Se sumaron todos los elementos del array
const totals = [1, 2, 3, 4]; //Donde entran las iteraciones que se suman

let sum = 0; //Estado inicial de la suma, afectaria si yo le pongo que el estado incial es 10 por ejemplo, por que sum iniciaria con un valor de 10
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}
console.log("con for", sum);

// ----------------

const totals2 = [1, 2, 3, 4]; //Donde entran las iteraciones que se suman
// El primer valor dentro de reduce es el acumulador (primer atributo, que le podemos poner cualquier nombre)
// sum hace como en el for, de tener un estado inicial en 0
const respuesta = totals2.reduce((sum, element) => sum + element, 0);
console.log("respuesta con reduce", respuesta);
// Recapitulando: A Reduce debemos de enviarle dos parametros
// El primer parametro es "hasta donde llega" la arrow function
// Nuestro segundo parametro es el estado inicial de sum
