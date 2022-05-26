// Some nos dice si alguno de esos elementos cumple con una condicional, no importando si son do o solo uno.
// Nos va a retornar un true o un false.

// Ejemplo, tenemos un array de comida donde es hamburguesa, pollo frito, papas y helado y queremos preguntar con some si alguno es vegano, entonces nos dara false, pero si preguntamos si alguno es carne (no importando cual) nos dará true.

// Como se hace con for
const numbers = [1, 2, 3, 4,];

let someRespuesta = false;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0){
        someRespuesta = true;
        break;  // si encuentra otra opcion ya no es necesario, así que vamos a cortar el codigo
    }
}

console.log (someRespuesta);
// resultado true



// -------------------------------------


// Hacerlo con el metodo array 

const someNumbers2 = [1, 2, 3, 4, 5];

const respuesta2 = someNumbers2.some(item => item % 2 === 0);

console.log('esta es la buena', respuesta2);
// resultado true



// -------------------------------------

//Hay que recordar que some es si alguna
// Con una orden de compra, podriamos pedirle si al menos una de las ordenes ya fue entragada


const ordersSome = [
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
        delivered: true,
    customerName: "Nicolas",
    total: 450,
    },
];


const respuesta3 = ordersSome.some(item => item.delivered);

console.log('si se entrego', respuesta3);
// retorna true





// Vamos a provar por medio de una liberia donde se usen fechas
// LO que se va a intentar es evaluar si podemos o no agendar y que no se crice con ninguna de las que ya tenemos.


const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

// mi intento, donde haremos que no se junte con las siguientes  2 citas

const obj1 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
}

const obj2 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 13),
    title: "Cita de trabajo",
}

const datesOverlap = (start1, end1, start2, end2) => {
    if (start1 <= end2 && start2 <= end1) return true
    else return false;
}

//verificamos

datesOverlap(obj1.startDate, obj1.endDate, obj2.startDate, obj2.endDate);

// retorna true