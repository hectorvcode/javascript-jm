/**
 * Condicionales
 * Permiten ejecutar diferentes códigos dependiendo si una condición
 * es verdadera o falsa
 */

/**
 * Estructura de control
 * Hace referencia a elementos del lenguaje que
 * permiten controlar el flujo de ejecución de código, es decir, el orden en que
 * se ejecutan las instrucciones
 *
 * Condicionales
 * if, else if, else: ejecutan código si se cumple una condición
 * switch: ejecuta código basado en el valor de una expresión
 */

let edad = 19;

if (edad >= 18) {
  console.log("Eres mayor de edad"); //Imprime este mensaje
} else {
  console.log("Eres un bebé");
}

//else...if
let nota = 6;

if (nota === 10) {
  console.log("Excelente");
} else if (nota >= 8) {
  console.log("Muy bien");
} else if (nota >= 6) {
  console.log("Regular"); //Imprime este mensaje
} else {
  console.log("Insuficiente");
}

/**
 * Déjame dormir -> 0 - 5h
 * Buenos días -> 6 - 11h
 * Buenas tardes -> 12 - 18h
 * Buenas noches -> 19 - 23h
 */

let hora = 5;

if (hora >= 0 && hora <= 5) {
  console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas Tardes");
} else {
  console.log("Buenas noches");
}

if (hora > 0 && hora < 6) {
  console.log("Déjame dormir");
} else if (hora > 5 && hora < 12) {
  console.log("Buenos días");
} else if (hora > 11 && hora < 19) {
  console.log("Buenas Tardes");
} else {
  console.log("Buenas noches");
}

/**
 * Operador Ternario
 * (condición) = verdadero : falso
 */

console.log("Operador Ternario");

let eresMayor = edad >= 18 ? "Eres mayor" : "Eres menor";
console.log(eresMayor);

/**
 * Switch - case
 * Domingo - 0
 * Lunes - 1
 * Martes - 2
 * Miercoles - 3
 * Jueves - 4
 * Viernes - 5
 * Sábado - 6
 */

let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("El día no existe");
    break;
}

/**
 * Bucles
 * for: ejecuta código repetidas veces en un bucle
 * white: crea un bucle que ser ejecuta mientras se cumpla una condición
 * do while: similar a while pero se ejecuta al menos una vez
 *
 * Salto de ejecución
 * break: termina la ejecución del bucle o sentencia
 * continue: salta una iteración del bucle
 *
 * Manejo de errores
 * try /catch: permite namejar errores en el código
 */
