
// Acá tenemos un ejemplo con elementos
// Queremos esta salida
// {
    // Es un objeto donde el atributo es el elemento (antes de :), y cuantas veces lo encontro (despues de :)
//    1:1,
//    3:2,
//    2:1 
// }


const items = [1, 3, 2, 3];

const respuesta = items.reduce((obj, item) => {
    if  (!obj[item]){
        obj [item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta);


// otro ejemplo pero en este caso con objetos

// Nos interesan primero los niveles, asi que ocuparemos un .map, para poder tenerlo como en el ejemplo anterior.
// y poner nuestro valor, podemos reutilizar nuestro codigo anterior de reduce pues el objetivo es contar

const data2 = [
    {
    name: "Nicolas",
    level: "low",
    },
    {
    name: "Andrea",
    level: "medium",
    },
    {
    name: "Zulema",
    level: "hight",
    },
    {
    name: "Santiago",
    level: "low",
    },
    {
    name: "Valentina",
    level: "medium",
    },
    {
    name: "Lucia",
    level: "hight",
    },
];

const respuesta2 = data2
.map(item => item.level)
.reduce((obj, item) => {
    if  (!obj[item]){
        obj [item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta2);

//A esto normalmente se le llama pay names, la entrada de uno y la salida de otro.