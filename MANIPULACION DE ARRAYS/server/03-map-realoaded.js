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
