console.log("Ejercicios 36");

/**
 * 9. Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */

const randomNum = () =>
  console.info(Math.floor(Math.random() * (600 - 501 + 1) + 501));
randomNum();

/**
 * 10. Programa una función que reciba un número y evalúe si es capicúa o no
 * (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */

const isCapicua = (num) => {
  if (!num) return console.warn("No digitaste el número a evaluar");
  let stringNum = num.toString();
  let invertedStr = stringNum.split("").reverse().join("");
  return stringNum === invertedStr;
};

console.info(isCapicua(2002));

/**
 * 11. Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
 * se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5)
 * devolverá 120
 */

const factorial = (n) => {
  if (n === 0) return console.info(1);
  if (!n) return console.warn("No ingresaste el número a evaluar");
  if (n < 0) return console.warn("Solo evalúa números positivos");
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return console.info(factorial);
};

factorial(6);
