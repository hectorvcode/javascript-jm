/**
 * Rest Params
 * En JavaScript los parámetros rest son una característica que permite a una
 * función aceptar un número variable de argumentos como un sólo parámetro,
 * representado por los tres puntos suspensivos. Este parámetro recoge los
 * argumentos restantes proporcionados a la función en un arreglo.
 *
 * Los parámetros rest son útiles cuando no sabes cuántos argumentos se
 * proporcionarán a la función y deseas recogerlos en un solo lugar para procesarlos.
 */

/**
 * function ejemplo(param1, param2, ...RestoParam){
 *  //codigo que utiliza los parámetros
 * }
 */

function sum(primero, segundo, ...resto) {
  let resultado = primero + segundo;

  for (let valor of resto) {
    resultado + valor;
  }

  return resultado;
}

console.log(sum(1, 2, 3, 4, 5)); //Imprime 15

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));

/**
 * Spread operator
 * Es una característica que permite expandir o desplegar elementos de un iterable
 * como un arreglo o propiedades de un objeto. Se usa para realizar copias o combinaciones
 * de datos de manera concisa
 */

//Copia Arreglos
let original = [1, 2, 3];
let copia = [...original];
console.log("copia: ", copia);
console.log(copia != original);

//Combinación arreglos
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinado = [...arr1, ...arr2];
console.log("combinado: ", combinado);

//Combinación Objetos
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinadoObj = { ...obj1, ...obj2 };
console.log("CombinadoObj: ", combinadoObj);

//En Funciones
function suma(a, b, c, d) {
  return a + b + c + d;
}

let valores = [1, 2, 3, 4];
console.log("Función suma: ", suma(...valores));
