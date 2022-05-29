// Every es lo opuesto a some. (Some evaluava que alguno de los elementos cumpla conla condición)

// Con every, todos los elementos deben de cumplir la condición
// Solamente retorna un true o un false


const numbers = [1, 30, 39, 29, 10, 13];

let respuesta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers [index];
    if (element >= 40){
        respuesta = false
    }
}
console.log('usando for', respuesta);
// Devuelve True



const numbers = [1, 30, 59, 29, 10, 13];

let respuesta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers [index];
    if (element >= 40){
        respuesta = false
    }
}
console.log('usando for', respuesta);
// Devuelve False (ya que 59 no es un numero menor a 40)



// ----------------------



const numbers = [1, 30, 39, 29, 10, 13];
// () pedimos que nos de directamente la condicion que quiere que todos cumpla
const respuesta2 = numbers.every(item => item <= 40)
console.log('usando every', respuesta2)
// Devuelve True



const numbers = [1, 30, 49, 29, 10, 13];
// () pedimos que nos de directamente la condicion que quiere que todos cumpla
const respuesta2 = numbers.every(item => item <= 40)
console.log('usando every', respuesta2)
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
