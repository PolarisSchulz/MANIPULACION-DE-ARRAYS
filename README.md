# manipulacion-de-arrays

- For Each  
    - Nos sirve para hacer un recorrido de los elementos de un array
    - Solo hay que enviar la función usando ⇒ (arrow function), y dentro de esto hacer el algoritmo o ejecución.
    - ⇒ Arrow Function: La funcion que se va a ejecutar por cada uno de los elementos. 
    - For Each hace lo mismo que un For, pero como metodo solo se ocupa en arrays  
    - 
- Map   
    - Funciona para hacer transformaciones en arrays
    - .map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.   
    - Mantienes el mismo  número de elementos (length) que el array original.
    - Te devuelve en el nuevo array.   
    - https://static.platzi.com/media/user_upload/metodos-90c872e6-a574-490e-8b9d-96c5309c278b.jpg 
- Map Reloaded  
    - Usos comunes o clásicos de map() sobre los arrays:   
    - Limpiar datos, seleccionar datos dentro de un array y devolverlos para su utilización en futuras acciones.
    - Añadir un nuevo elemento, modificar agregando un nuevo dato al objeto pero sin modificar el array original.
    - Cuando trabajamos con objetos y map() y retornamos el mismo objeto estamos copiando la referencia en memoria que tiene el objeto original que le aplicamos el map()
        - Lectura Mutable e Inmutable: https://platzi.com/tutoriales/1642-javascript-profesional/4559-estructuras-de-datos-inmutables/).
    - Esto provoca que como estamos modificando la referencia en memoria, el array original también sea modificado.   Entonces en conclusión, por más que map()  sea inmutable en este punto estamos copiando la referencia en memoria y por eso hace el cambio en el original. 
    ```js
    - // Estamos retornando el objeto, por ende se copia la refencia en memoria
    const respuesta2 = orders.map((item) => {
    item.tax = 0.19;
  return item; });
  // Esto pasa por que estamos trabajando con objetos
  ```

    - Para evitarlo, y poder realizar una copia y evitar la referencia en memoria, utilizamos el spread operator de ES6 (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax), donde generamos un nuevo objeto con los valores del objeto original y luego agregamos el nuevo valor que nos interesa.   
    - Referencias de objetos y copia https://es.javascript.info/object-copy
     ```js
    // Ahora sí, sin modificar el array original
    const respuesta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19, // La clave esta en el return donde debemos generar un nuevo objeto para no trabajar con la referencia en memoria, sino con un objeto nuevo
  };
  });
  console.log("respuesta3", respuesta3); //Agregar un nuevo atributo a cada uno de los objetos
  console.log("original", orders);
  ```

- Filter 
    - Lo que hace es filtrar el array original en base a una condición, los que cumplan la condición estaran en el nuevo array creado.
    - Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener: 
        - cero coincidencias
        - todas coincidencias
        - algunas coincidencias
        - Pero nunca más coincidencias que el tamaño del array original.
