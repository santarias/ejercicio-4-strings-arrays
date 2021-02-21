let palabras = ['café', 'croissant', 'tostada', 'zumo'];
let palabrasParesModificadas = modificaPares(palabras, elemento =>
  elemento.charAt(0).toUpperCase() + elemento.slice(1));


function modificaPares(array, funcionAnonima) {
  let pares = palabras.map(funcionAnonima);
  for (elemento in array) {
    if (elemento % 2 !== 0) {
      array[elemento] = pares[elemento];
    }
  }
  return array;
}

console.log(`${palabrasParesModificadas}`);
