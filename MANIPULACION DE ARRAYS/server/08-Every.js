// Every es lo opuesto a some. (Some evaluava que alguno de los elementos cumpla conla condición)

// Con every, todos los elementos deben de cumplir la condición
// Solamente retorna un true o un false


const numbers4 = [1, 30, 39, 29, 10, 13];

let respuesta4 = true;
for (let index = 0; index < numbers4.length; index++) {
    const element = numbers4 [index];
    if (element >= 40){
        respuesta4 = false
    }
}
console.log('usando for', respuesta4);
// Devuelve True



const numbers5 = [1, 30, 59, 29, 10, 13];

let respuesta5 = true;
for (let index = 0; index < numbers5.length; index++) {
    const element = numbers5 [index];
    if (element >= 40){
        respuesta5 = false
    }
}
console.log('usando for', respuesta5);
// Devuelve False (ya que 59 no es un numero menor a 40)



// ----------------------



const numbers6 = [1, 30, 39, 29, 10, 13];
// () pedimos que nos de directamente la condicion que quiere que todos cumpla
const respuesta6 = numbers6.every(item => item <= 40)
console.log('usando every', respuesta6)
// Devuelve True



const numbers7 = [1, 30, 49, 29, 10, 13];
// () pedimos que nos de directamente la condicion que quiere que todos cumpla
const respuesta7 = numbers7.every(item => item <= 40)
console.log('usando every', respuesta7)
// Devuelve False (ya que 49 no es un numero menor a 40)



// ---------------------

const team = [
{
    name: "Nicolas",
    age: 12,
},
{
    name: "Andrea",
    age: 8,
},
{
    name: "Zulema",
    age: 2,
},
{
    name: "Santiago",
    age: 18,
},
];

const teamMenor = team
.map(key => key.age)
.every(age => age <= 15)

teamMenor ? 'El equipo puede participar ya que sus jugadores tiene menor oh igual a 15 años cumple con el requisito' : 'El equipo no puede participar ya que uno o mas de sus jugadores no cumple con el requisito de tener menor a oh igual 15 años'
// retorna 'El equipo no puede participar ya que uno o mas de sus jugadores no cumple con el requisito de tener menor a oh igual 15 años'

