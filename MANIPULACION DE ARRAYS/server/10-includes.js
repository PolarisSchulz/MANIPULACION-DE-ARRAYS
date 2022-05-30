// Me dice si un elemento está o no está dentro del array (sistema de busqueda)
// El método includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda. 



const pets = ['cat','dog','bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog'){
        includeInArray = true;
        break;
    }
}
console.log('con for', includeInArray);
// regresa 'for' true



const pets2 = ['cat','dog','bat'];
// Con includes no necesitamos un arrow function, solo el elemento

// Al no usarr arrow function no podriamos trabajar con objetos, a menos que pasemos la referencia del objeto directamente

// includes tambien funciona con strings y ver si un elemento incluye una palabra en especifico, por ejemplo
const respuesta14 = pets2.includes('dog');
console.log('con include', respuesta14);
// regresa 'include' true



