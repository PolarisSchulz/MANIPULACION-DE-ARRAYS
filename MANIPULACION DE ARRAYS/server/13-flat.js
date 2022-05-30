// Se trata de manipular arrays que tienen otros arrays adentro
// Lo que busca es hacer un array unico(como aplanar el array)


const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1,2,[7,9]]],
    [7, 8, 9],
];

const newArray = [];
// Estamos emulando un array dentro de otro array
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
        for (let j = 0; j < array.length; j++) {
            const element = matriz[i][j];
            newArray.push(element);
        }
}
console.log('con for', newArray);
// regresa:  'con for' [ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 7, 9 ] ], 7, 8, 9 ]

const respuesta21 = matriz.flat();
console.log('con flat', respuesta21)
// 'con flat' [ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 7, 9 ] ], 7, 8, 9 ]

// Con flat necesitamos saber cuantos niveles queremos que se introduzca del array matriz
const respuesta21 = matriz.flat(3);
console.log('con flat', respuesta21)
// 'con flat' [ 1, 2, 3, 4, 5, 6, 1, 2, 7, 9, 7, 8, 9 ]


