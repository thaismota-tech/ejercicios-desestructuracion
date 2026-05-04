//EJERCICIO 1  Intercambio de valores usando desestructuración
let [a = 5, b = 10] = [10, 5];
console.log(a);
console.log(b);

//EJERCICIO 2  Obtener el segundo elemento de un array
function segundoElemento(array) {
  return array[1]; //se pone 1 porque el segundo número del array está en esa orden según el índice
}
console.log(segundoElemento([1, 2, 3, 4]));
