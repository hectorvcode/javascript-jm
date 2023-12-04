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
console.log(exp);

//Tener en cuenta signos de agrupación
let a = 5 + (5 - 10) * 3;

let modulo = 5 % 2;

console.log(a); //Imprime -10
console.log(modulo); //Imprime 1

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

/**Incremento y Decremento
 * Los operadores de incremento y decremento permiten aumentar o disminuir
 * fácilmente una variable numérica.
 *
 * Incremento(++)
 * Existen dos formas, el prefijo y el postfijo
 * Prefijo(++x) - Primero incrementa x en 1 y luego devuelve el valor
 * Posftfijo(x++) - Primero devuelve el valor de x y luego incrementa en 1
 *
 * Decremento(--)
 * También existe la forma prefija y postfija
 * Prefijo(--x) - Primero decrementa x en 1 y luego devuelve el valor
 * Posftfijo(x--) - Primero devuelve el valor de x y luego decrementa en 1
 *
 */

//For Loop
console.log("For Loop");
for (let n = 0; n < 10; n++) {
  console.log(n); // 0, 1, 2, 3, 4, 5, ... 9
}

//Recursive function
console.log("Recursive Function");
function cuentaRegresiva(num) {
  if (num > 0) {
    console.log(num);
    num--;
    cuentaRegresiva(num);
  }
}

cuentaRegresiva(5);

let i = 2;

console.log("i++: ", i++);
console.log("i: ", i);
console.log("++i: ", ++i);
console.log("i++: ", ++i);

i = i + 2;
console.log(i);

i *= 3;
console.log(i);

i += 1;
i++;
console.log(i);

/**Lógicos
 * Se utilizan para combinar o comparar valores lógicos y booleanos(true y false)
 */

/**
 * AND(&&)
 * Devuelve true si ambos operandos son verdaderos
 */
true && true; //true
true && false; //false
false && false; //false

/**
 * OR(||)
 * Devuelve true si alguno de los operandos es verdadero
 */
true || false; // true
false || true; // true
false || false; // false

/**
 * NOT(!)
 * Niega una expresión booleana. Invierte false a true y viceversa
 */
!true; // false
!false; // true

console.log((9 === 9) || ("3" === 3)); //true
console.log((9 === 9) && ("3" === 3)); //false

