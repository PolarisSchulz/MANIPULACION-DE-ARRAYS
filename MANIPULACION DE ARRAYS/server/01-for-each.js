// para ver el resultado podemos hacerlo en la consola directa con runner (extension)

const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("con for", element);
}

letters.forEach((item) => console.log("con forEach", item));
