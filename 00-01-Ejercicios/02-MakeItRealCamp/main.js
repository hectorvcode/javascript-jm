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

/**
 * 5. Número de likes
 * Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones
 * Por ejemplo:
 * 1400 se convierte en 1K
 * 34567 se convierte en 34K
 * 7456645 se convierte en 7M
 * Si el número es menor a 1000 se debe devolver el mismo número como un string
 */

function likes(num) {
  if (num < 999) {
    return num.toString();
  } else if (num >= 1000 && num < 1000000) {
    return Math.floor(num / 1000) + "K";
  } else {
    return Math.floor(num / 1000000) + "M";
  }
}

// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"

/**
 * 6. FizzBuzz
 * Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:
 * "fizz" si el número es múltiplo de 3
 * "buzz" si el número es múltiplo de 5
 * "fizzbuzz" si el número es múltiplo tanto de 3 como de 5
 * Si no cumple con ninguna de las condiciones anteriores debe retornar el mismo número
 */

function fizzBuzz(num1) {
  if (num1 % 3 === 0 && num1 % 5 === 0) {
    return "fizzbuzz";
  } else if (num1 % 3 === 0) {
    return "fizz";
  } else if (num1 % 5 === 0) {
    return "buzz";
  } else {
    return num1;
  }
}

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

/**
 * 7. Contar rango de números
 * Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos(excluyéndolos)
 * Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primier número va a ser menor que el segundo
 */

function contarRango(n1, n2) {
  let contador = 0;
  for (let i = n1 + 1; i <= n2 - 1; i++) {
    contador++;
  }
  return contador;
}

// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0

/**
 * 8. Sumar rango de números
 * Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).
 * Nota: puedes asumir que el número inicial va a ser menor o igual que el número final
 */

function sumarRango(num1, num2) {
  let acumulador = 0;
  for (let i = num1; i <= num2; i++) {
    acumulador += i;
  }
  return acumulador;
}

// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0
