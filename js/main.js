//EJERCICIO 1  Intercambio de valores usando desestructuración
let [a = 5, b = 10] = [10, 5];
console.log(a);
console.log(b);

//EJERCICIO 2  Obtener el segundo elemento de un array
function segundoElemento(array) {
    return array[1]; //se pone 1 porque el segundo número del array está en esa orden según el índice
}
console.log(segundoElemento([1, 2, 3, 4]));

//EJERCICIO 3  Desestructuración de un objeto con valores por defecto
const persona = { edad: 25 };
const { edad, nombre1 = 'Desconocido' } = persona;
console.log(nombre1);

//EJERCICIO 4  Sumar elementos de un array desestructurado
function sumarTres(array) {
    const [a, b, c] = array;
    return a + b + c;
}
console.log(sumarTres([4, 5, 6, 7]));

//EJERCICIO 5  Desestructuración con Rest para obtener elementos restantes
function sinPrimero(array) {
    const [primero, ...restante] = array;
    return restante;
}
console.log(sinPrimero([1, 2, 3, 4]));

//EJERCICIO 6  Desestructurar un objeto anidado
const persona2 = {
    nombre2: "Roberto",
    direccion: {
        ciudad: "Quito",
        pais: "Ecuador",
    },
};
const {
    nombre2,
    direccion: { ciudad, pais },
} = persona2;
console.log(nombre2);
console.log(pais); 