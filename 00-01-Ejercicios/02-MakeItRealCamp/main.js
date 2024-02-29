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

/**
 * IMC (ïndice de masa corporal)
 * El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
 */

console.log("IMC (Indice de masa corporal)");

function bmi(peso, altura) {
  let bmiInd = peso / Math.pow(altura, 2);
  if (bmiInd < 18.5) {
    return "Bajo de peso";
  } else if (bmiInd >= 18.5 && bmiInd <= 24.9) {
    return "Normal";
  } else if (bmiInd >= 25 && bmiInd <= 29.4) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
}

console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"
