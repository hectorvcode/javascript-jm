/**
 * Arrow Function
 * Son una forma concisa de escribir funciones en JavaScript.
 * Proporcionan una sintaxis mas comparcta y una forma diferente
 * de manejar el contexto this, en comparación con las funciones
 * tradicionales
 */

//Función tradicional
function sum(a, b) {
  return a + b;
}

//Equivalente Arrow Function
let sumaArrow = (a, b) => a + b;

//Arrow Function con un solo parámetro
let cuadrado = (x) => x * x;

//Sin parámetros
let saludo = () => console.log("Hey!");

//Con Múltiples líneas
let sumaMultiples = (a, b) => {
  let suma = a + b;
  return suma;
};

//Otros ejemplos
const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Irma");

const sayHi = (nombre) => console.log(`Hola ${nombre}`);
sayHi("Irma");

const sumar = function (a, b) {
  return a + b;
};

console.log(sumar(8, 9));

const sumarArrow = (a, b) => a + b;
console.log(sumarArrow(9, 9));

const funcionVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};

funcionVariasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (el, index) {
  console.log(`El elemento ${el} está en la posición ${index}`);
});

//Transformando en una arrow function

numeros.forEach((el, index) =>
  console.log(`${el} está en la posición ${index}`)
);

/**
 * Las arrow function tienen la capacidad de capturar el contexto del
 * objeto en el que se encuentran
 *
 * Las funciones tradicionales respetan el contexto de donde se encuentran
 */

//Puede usarse la siguiente sintaxis en las funciones para simplificarlas

const perro = {
  nombre: "kenai",
  ladrar() {
    console.log(this);
  },
};

perro.ladrar();
