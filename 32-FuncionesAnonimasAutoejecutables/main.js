/**
 * Funciones anónimas autoejecutables
 * Son funciones que se definen y ejecutan inmediatamente después de su creación
 * También se conocen  como funciones inmediatas o autoinvocadas
 * Su nombre en ingles es "Immediately Invoked Function Expressions" (IIFE)
 *
 * La sintaxis básica de una IIFE es la siguiente:
 * (function() {
 *  //Codigo de la función
 * })();
 *
 * La función se declara dentro de un paréntesis para convertirse en una expresión
 * Luego se coloca otro paréntesis al final para invocar o ejecutar la función
 *
 * Esto encapsula el código de la función y evita que sus variables y funciones
 * contaminen el ámbito global porque el ámbito de la IIFE es local
 */

(function () {
  let mensaje = "Hola desde una IIFE";
  console.log(mensaje);
})();

//Genera un error porque mensaje no está en el ambito global
//console.log(mensaje);

/**
 * Con argumentos y valor devuelto
 */

let resultado = (function (a, b) {
  return a + b;
})(5, 10);

console.log(resultado);

/**
 * Mircha
 */

alert("Hola");

(function () {
  console.log("Mi primer IIFE");
})();

(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  console.log(c);
})(document, window, console);

/**
 * Formas de escribir las funciones anonimas autoejecutables
 */

//Clasica
(function () {
  console.log("Versión Clásica");
})();

// Crockford (JavaScript The Good Parts)
(function () {
  console.log("Version Crockford");
})();

//Unaria
+(function () {
  console.log("Versión Unaria");
})();

//Facebook
!(function () {
  console.log("Versión Facebook");
})();
