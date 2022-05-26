// - Reduce 
//     - Este método REDUCE, efectivamente hace eso. Solo reduce a un solo valor y no devuelve otro array, simplemente un valor. 
//     - Se utiliza muchísimo para hacer cálculos a partir de la información de un array. 
//     - En su composición, a primeras, tiene como argumentos de la función del primer parámetro, al acumulador y como segundo parámetro al elemento por el que va iterando el loop. Y como segundo argumento del reduce(), se pasa el valor inicial del acumulador.   


// Con ciclo for
// Se sumaron todos los elementos del array
const totals = [1, 2, 3, 4]; //Donde entran las iteraciones que se suman

let sum = 0; //Estado inicial de la suma, afectaria si yo le pongo que el estado inicial es 10 por ejemplo, por que sum iniciaria con un valor de 10
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}
console.log("con for", sum);



// con metodo array
// ----------------

const totals2 = [1, 2, 3, 4]; //Donde entran las iteraciones que se suman
// El primer valor dentro de reduce es el acumulador (primer atributo, que le podemos poner cualquier nombre)
// sum hace como en el for, de tener un estado inicial en 0
const respuesta = totals2.reduce((sum, element) => sum + element, 0);
console.log("respuesta con reduce", respuesta);
// Recapitulando: A Reduce debemos de enviarle dos parametros
// El primer parametro es "hasta donde llega" la arrow function
// Nuestro segundo parametro es el estado inicial de sum


// Así funciona la iteración del reduce() por dentro   
- https://remnote-user-data.s3.amazonaws.com/ISJcke2L619MqrkOmJwYPwH7KWk2RrkoF_86ZTYozG44_X_vllrfp-9w_14CetosxaTJ4l6J584BcdG28aO_FmGPJaOFIH5VzxqLBV0L9JWMl09fE4aaNxrXKUgYkwst.jpeg

- https://miro.medium.com/max/2000/1*dhTC_FFgiH3mKROrnDj12w.gif 

- https://static.platzi.com/media/user_upload/metodos-90c872e6-a574-490e-8b9d-96c5309c278b.jpg







// Un ejercicio para que quede mejor

// Tienes un array de números y debes retornar la suma de todos los valores en él.

// La solución debería tener un input y output como los siguientes:
// solution([1, 1, 1]);
// solution([2, 4, 8]);

// Output
// 3
// 14



const solution1 = [1, 1, 1];
const solution2 = [2, 4, 8];

solution1.reduce((sum, element) => sum + element, 0);
console.log("replySolution1", solution1);
// 3
solution2.reduce((sum, element) => sum + element, 0);
console.log("replySolution2", solution2);
// 14