let palabras = ['café', 'croissant', 'tostada', 'zumo'];
let palabrasParesModificadas = modificaPares(palabras, elemento =>
  elemento.charAt(0).toUpperCase() + elemento.slice(1));


function modificaPares(array, funcionAnonima) {
  let pares = array.map(funcionAnonima);
  let nuevoArray = Array.from(array);
  for (elemento in nuevoArray) {
    if (elemento % 2 !== 0) {
      nuevoArray[elemento] = pares[elemento];
    }
  }
  return nuevoArray;
}

console.log(`${palabrasParesModificadas}`);
