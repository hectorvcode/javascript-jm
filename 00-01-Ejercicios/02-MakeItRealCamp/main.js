console.log("Make It Real Exercises");

/**
 * Contraseña válida
 * Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
 */

console.log("Contraseña válida");

function contrasenaValida(str) {
  const validPass1 = "2Fj(jjbFsuj";
  const validPass2 = "eoZiugBf&g9";
  if (str === validPass1 || str === validPass2) {
    return true;
  } else {
    return false;
  }
}
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValida("")); // false

/**
 * Calcular Impuestos
 * Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.
 */

console.log("Calcular Impuestos");

function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.4;
  } else {
    return 0;
  }
}

console.log(calcularImpuestos(18, 1000)); // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000)); // 0
console.log(calcularImpuestos(30, 500)); // 0
