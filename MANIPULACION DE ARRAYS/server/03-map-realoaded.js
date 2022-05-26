const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
// console.log("original", orders);

const respuesta = orders.map((item) => item.total);
// console.log("respuesta", respuesta);

// ¿Cómo hacer si quiero agregar el tax(impuesto) sin modificar el array original?

// const respuesta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("respuesta2", respuesta2); //Agregar un nuevo atributo a cada uno de los objetos
// console.log("original", orders); //Solo para cerciorarse que el array original no ha cambiado (si cambió la mutacion)
// Esto pasa por que estamos trabajando con objetos

// ---------------------

// Ahora sí, sin modificar el array original
const respuesta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19, // La clave esta en el return donde debemos generar un nuevo objeto para no trabajar con la referencia en memoria, sino con un objeto nuevo
  };
});
console.log("respuesta3", respuesta3); //Agregar un nuevo atributo a cada uno de los objetos
console.log("original", orders);







// -------------------------
// Por medio de un ejercicio

// Tienes un array de productos con los siguientes atributos:

// name
// price
// stock
// Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

// Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.

// La solución debería tener un input y output como los siguientes:

// solution([
//   {
//     name: "Product 1",
//     price: 1000,
//     stock: 10
//   },
//   {
//     name: "Product 2",
//     price: 2000,
//     stock: 20
//   },
//   ...
// ]);

// Output

// [
//   {
//     name: "Product 1",
//     price: 1000,
//     stock: 10,
//     taxes: 190
//   },
//   {
//     name: "Product 2",
//     price: 2000,
//     stock: 20,
//     taxes: 380
//   },
//   ...
// ]


const orderOriginal = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
];

const reply = orderOriginal.map((item) => {
  return {
    ...item,
tax: 0.19, // La clave esta en el return donde debemos generar un nuevo objeto para no trabajar con la referencia en memoria, sino con un objeto nuevo
  };
});
console.log("reply", reply); //Agregar un nuevo atributo a cada uno de los objetos
console.log("original", orderOriginal);



const orderOriginal2 = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
];

const reply = orderOriginal2.map((item) => {
  return {
    ...item,
    taxes: item.price *0.19
  };
});
console.log("reply", reply);
console.log("original", orderOriginal2);