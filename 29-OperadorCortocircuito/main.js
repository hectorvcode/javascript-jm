/**
 * Cortocircuito OR - cuando el valor de la izquierda en la
 * expresión siempre pueda validar a true, es el valor que
 * se cargará por defecto
 *
 * Cortocircuito AND - cuando el valor de la izquierda en
 * la expresión siempre pueda validar a false, es el valor
 * que se cargará por defecto
 */

/* function saludar(nombre = "desconocido") {
  console.log(`Hola ${nombre}`);
} */

//Definiendo valores por defecto usando cortocircuito
function saludar(nombre) {
  nombre = nombre || "desconocido";
  console.log(`Hola ${nombre}`);
}

saludar("Hector"); //Hola Hector
saludar(); //Hola desconocido

console.log("--- Or ---");
console.log("cadena" || "Valor derecha");
console.log(19 || "Valor derecha");
console.log([] || "Valor derecha");
console.log({} || "Valor derecha");
console.log(false || "Valor derecha");
console.log(null || "Valor derecha");
console.log(undefined || "Valor derecha");
console.log("" || "Valor derecha");
console.log(-2 || "Valor derecha");
console.log(0 || "Valor derecha");

//AND
console.log("--- And ---");
console.log(false && "Valor derecha");
console.log(null && "Valor derecha");
console.log(undefined && "Valor derecha");
console.log("" && "Valor derecha");
console.log(-2 && "Valor derecha");
console.log(0 && "Valor derecha");

console.log("cadena" && "Valor derecha");
console.log(19 && "Valor derecha");
console.log(true && "Valor derecha");
console.log([] && "Valor derecha");
console.log({} && "Valor derecha");
