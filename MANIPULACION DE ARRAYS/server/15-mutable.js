const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// regresa: 
/*'products' [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' }
]
'myProducts' []
'----------'*/
const myProducts = [];
const product = products.find(item => item.id === '🍔');
if (product){
    myProducts.push(product);
console.log("myProducts", myProducts);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
// regresa; 'myProducts' [ { title: 'Burger', price: 121, id: '🍔' } ]


// Pero como hacemos que cuando se pase a myProducts, se borre del array de products?
// Seria eliminando un elemento del array 

const myProducts = [];
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1){
    myProducts.push(products[productIndex]);
products.splice(productIndex, 1); //tenemos que tener la ubicacion del elemento array, no el id, y despues poner cuantos elementos quiero borrar a partir de esta ubicacion
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
// regresa:
/* [ { title: 'Burger', price: 121, id: '🍔' } ]

'products' [
{ title: 'Pizza', price: 121, id: '🍕' },
{ title: 'Hot cakes', price: 121, id: '🥞' }
]
'myProducts' [ { title: 'Burger', price: 121, id: '🍔' } ]
'----------' */



// como podriamos hacer una actualizacion dentro de nuestro array?
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes:{
        price: 200,
        description: 'delicioso',
    }
}
const productIndex2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndex2] = update.changes;


console.log('productosV2', productsV2);
//regresa:
/*{ price: 200, description: 'delicioso' }

'productosV2' [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { price: 200, description: 'delicioso' }
] */

// El problema es que cambiamos toda la informacion del id y del titulo, no los respeto,los sobreescribio

// Para evitar esto, debemos copiar un nuevo objeto con los elementos del anterior (para respetar lo que ya habia, y respetar los cambios)

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes:{
        price: 200,
        description: 'delicioso',
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};


console.log('productosV2', productsV2);
// regresa:
/*
{
  title: 'Hot cakes',
  price: 200,
  id: '🥞',
  description: 'delicioso'
}
'productosV2' [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  {
    title: 'Hot cakes',
    price: 200,
    id: '🥞',
    description: 'delicioso'
  }
]
*/

//En este caso estamos haciendo una fusion entre el estado anterior, más lo cambios que yo quiero poner, entonces haria una fision de ambos objetos.
// El id se respeta
//El titulo se respeta
// y modificamos el producto y agregamos uno nuevo que seria el description.


