// Manera de hacerlo con for

const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    //Pedimos que sea la palabra mayor o igual a 6 letras
    newArray.push(item); //push hace parte del nuevo array
  }
}
console.log("newArray", newArray);
console.log("original", words);

// ----------------

// Manera de hacerlo con filter

const respuesta = words.filter((item) => item.length >= 6);
// Va a generar un nuevo arreglo que lo va a guardar en 'respuesta'
console.log("respuesta", respuesta);
console.log("original", words);

// en ambos casos, el resultado:
// > [ 'exuberant' ]

// -------------------

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
  {
    customerName: "Nicolas",
    total: 450,
    delivered: true,
  },
];

// const respuestaOrder = orders.filter(
//   (item) => item.delivered && item.total >= 100
// );
// console.log("respuestaOrder", respuestaOrder);

// resultado
// respuestaOrder [
//     { customerName: 'Santiago', total: 180, delivered: true },
//     { customerName: 'Valentina', total: 240, delivered: true }
//   ]

// --------------------------
// Hagamos un buscador de las ordener por medio del nombre
const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};
console.log(search("Nico")); //Encuentra a alguien con Nico
console.log(search("Nicolas")); //Encuentra a alguien con nombre completo
console.log(search("a")); //Encuentra a alguien que contenga la letra que necesitamos (en este caso devuelve a todos los que tienen una a en su nombre)
console.log(search("jhfdkaljs")); //No encuentra a nadie con este nombre pero si lo hubiese lo encontraria

// ------------------------

// offtopic: el método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
const array1 = [1, 2, 3];

console.log(array1.includes(2)); // respuesta true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat")); // respuesta true
console.log(pets.includes("at")); // respuesta false
