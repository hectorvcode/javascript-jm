console.log("Introducción a JavaScript");

/**
 * 1. Crea una función que tome dos números como parámetros y devuelva su suma:
 */

console.log("Ejercicio 1");

function suma(num1, num2) {
  return num1 + num2;
}

console.log(suma(2, 3));

/**
 * 2. Crea una función que tome un número como parámetro y devuelva «par» si es par y «impar» si es impar:
 */

console.log("Ejercicio 2");

function parImpar(num) {
  if (num % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log(parImpar(4));
console.log(parImpar(11));

/**
 * 3. Crea una función que tome un array como parámetro y devuelva el número de elementos del array
 */

console.log("Ejercicio 3");

function numElementos(arr) {
  return arr.length;
}

console.log(numElementos([1, 2, 3]));

/**
 * 4. Crea una función que tome un objeto como parámetro y devuelva el número de propiedades que tiene el objeto:
 */

console.log("Ejercicio 4");

function numPropiedades(obj) {
  return Object.keys(obj).length;
}

const car = { type: "Fiat", model: "500", color: "white" };
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(numPropiedades(car));
console.log(numPropiedades(person));

/**
 * 5. Crea una función que tome un objeto como parámetro una cadena y devuelva el número de caracteres que tiene
 */

console.log("Ejercicio 5");

function cadena(str) {
  return str.length;
}

console.log(cadena("Hola mundo!"));
