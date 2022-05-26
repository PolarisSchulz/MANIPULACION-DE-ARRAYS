// Sort es un metodo que va a mutar, cada vez que se aplique va a cambiar el orden del array original.
// Es un metodo mutable.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log('months', months);
//Regresa [ 'Dec', 'Feb', 'Jan', 'March' ]

// sort solito va a acomodar conforme a la relevancia que tiene en el codigo ASCII, por eso no sale por mes, tendriamos que agregar un numero.





// -------------------Otro ejemplo

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log('months', numbers);
// Regresa 'months' [ 1, 100000, 21, 30, 4 ]

// Tambien en números aplica la importancia del codigo ASCII

// Lo que tenemos que hacer es mandar el peso de secuencia que conocemos modificando sort con una arrow function y enviando dos elementos, porqué el tiene que comparar quien es más grande que el otro.

// En el caso de números solo tenemos que hacer una resta entre a-b, con esto sort sabe quien es más grande y por ende lo va a arreglar

const numbers2 = [1, 30, 4, 21, 100000];
numbers2.sort((a,b) => a - b);
console.log('months', numbers2);
//Regresa  'months' [ 1, 4, 21, 30, 100000 ]

// Si queremos acomodar al contrario, solo tendremos que cambiar los valores de b-a

const numbers3 = [1, 30, 4, 21, 100000];
numbers3.sort((a,b) => b - a);
console.log('months', numbers3);
//Regresa 'months' [ 100000, 30, 21, 4, 1 ]






// -------------Otro ejemplo con caracteres especiales

// realmente acá el unico problema es si estamos usando una version vieja de navegador, en ese caso aplicamos el uso de a-b nuevamente.

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
console.log('palabritas', words);
// regresa  'palabritas' [ 'adieu', 'banana', 'café', 'communiqué', 'premier', 'réservé', 'éclair' ]






// ------------Otro ejemplo con objetos

// Donde quiero ordenar por el total de compras

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
// cuando trabajemos con objetos tenemos que tomar en cuenta los atributos (en este caso .total, .delivered o .customerName)
orders.sort((a,b) => b.total - a.total);
console.log(orders);

// Regresa 
// {
//     customerName: 'Santiago',
//     total: 1840,
//     delivered: true
//   },
//   {
//     customerName: 'Nicolas',
//     total: 600,
//     delivered: true
//   },
//   {
//     customerName: 'Valentina',
//     total: 240,
//     delivered: true
//   },
//   {
//     customerName: 'Zulema',
//     total: 120,
//     delivered: false
//   }
// ]