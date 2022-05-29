// El método join() une todos los elementos de un array en una cadena y devuelve esta cadena.
// Podemos pasarle cualquier elemento como separador que deseemos.

const elements = ['Fire', 'Air', 'Water'];

let respuestaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    respuestaFinal =respuestaFinal + element + separator;
}
console.log('con for', respuestaFinal);
// refresa: 'con for' 'Fire--Air--Water--'




const elements2 = ['Fire', 'Air', 'Water'];
const respuesta15 = elements2.join('--')
console.log('con join', respuesta15);
// regresa: 'con join' 'Fire--Air--Water'



// ---------------------



// Y el método split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas. 

let text = "How are you doing today?";
const myArray = text.split(" ");
console.log('myArray', myArray);
// regresa 'myArray' [ 'How', 'are', 'you', 'doing', 'today?' ]

const text2 = 'How are you doing today?';
const respuesta16 = text2.split(' ').join('-').toLowerCase();
console.log('con join', respuesta16);
// regresa: 'con join' 'how-are-you-doing-today?'