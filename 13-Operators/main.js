/**Operadores
 * Son símbolos que se utilizan para realizar operaciones sobre valores y variables
 */

/** Aritméticos
 * Son aquellos que se utilizan para hacer operaciones
 * matemáticas entre varibles y valores.
 * Suma, resta, multiplicación, división, Módulo o resto, Exponenciación
 */

let mod = 10 % 3; //Es igual a 1
let exp = 3 ** 2; //Es igual a 9

console.log(mod);
console.log(exp)

//Tener en cuenta signos de agrupación
let a = 5 + (5-10) * 3;

let modulo = 5 % 2;

console.log(a) //Imprime -10
console.log(modulo) //Imprime 1

/**Relacionales
 * También llamados operadores de comparación
 * Sirven para hacer comparaciones entre dos valores o variables
 * >, <, >=, <=, ==, ===, !==, !===
 * Devuelven siempre un valor booleano como resultado
 */

console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);

//= Asignación
let x = 5;
console.log(x);

//== Comparación de valores
console.log("7" == 7);
console.log(0 == false);

//=== Comparación de valores y tipo de dato
console.log("7" === 7);