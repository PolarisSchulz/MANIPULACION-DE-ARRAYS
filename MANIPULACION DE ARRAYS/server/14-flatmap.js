// Flatmap es un metodo bastante util que tiene la funcion entre un flat y un map de ir transformando a medida de que va aplanando.

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

// ¿Cual seria la forma de poder tener un array completo de todos los atributos de mis usuarios?

const respuesta22 = users.map(user => user.attributes);
console.log('users-map',respuesta22);
// Regresa un array de arrays
// regresa: 'users-map' [[ 'Nice', 'Cute' ],[ 'Lovely' ],[ 'Nice', 'Cool' ]]


// Si quiero hacer un array lineal de los atributos, solo agregamos el .flat


const respuesta23 = users.map(user => user.attributes).flat();
console.log('users-map+flat',respuesta23);
// regresa: 'users-map+flat' [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]



const respuesta24 = users.flatMap(user => user.attributes);
console.log('users-flatMap',respuesta24);
// regresa: 'users-flatMap' [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]


// --------------------------

// Ejemplo con calendario, donde yo quiero que retornen las fechas de inicio de las citas.

const calendars = {
    primaryCalendar: [
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
    },
    {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
    },
    ],
    secondaryCalendar: [
    {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
    },
    {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
    },
    ],
};


// object.key me va a decir los atributos que tiene un objeto
const respuesta25 = Object.keys(calendars);
console.log('calendars', respuesta25);
// regresa: 'calendars' [ 'primaryCalendar', 'secondaryCalendar' ]





// object.value me dará u array de arrays
const respuesta26 = Object.values(calendars);
console.log('calendars', respuesta26);
// regresa: 'calendars' [
/*[
    {
    startDate: 2021-02-01T21:00:00.000Z,
    endDate: 2021-02-01T21:30:00.000Z,
    title: 'Cita 1'
    },
    {
    startDate: 2021-02-01T23:00:00.000Z,
    endDate: 2021-02-02T00:00:00.000Z,
    title: 'Cita 2'
    }
],
[
    {
    startDate: 2021-02-01T18:00:00.000Z,
    endDate: 2021-02-01T18:30:00.000Z,
    title: 'Cita 2'
    },
    {
    startDate: 2021-02-01T15:00:00.000Z,
    endDate: 2021-02-01T16:00:00.000Z,
    title: 'Cita 4'
    }
]
]*/



// Tenemos el array de fechas directas de inicio de cada uno de los calendarios
const respuesta27 = Object.values(calendars).flatMap(item =>{
    console.log('item, item')
    return item.map(date => date.startDate);
});
console.log('calendars', respuesta27);
// regresa:
/*'item, item'
'item, item'

'calendars' [
2021-02-01T21:00:00.000Z,
2021-02-01T23:00:00.000Z,
2021-02-01T18:00:00.000Z,
2021-02-01T15:00:00.000Z
]*/

