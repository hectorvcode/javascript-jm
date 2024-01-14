console.log("Ejercicios 37");

/**
 * 12. Programa una función que determine si un número es primo
 * (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7)
 * devolverá true.
 */

const isPrime = (num) => {
  if (num <= 1) return console.info(false);
  if (!num) return console.info("Ingresa número a evaluar");
  if (num === 2) return console.info(true);

  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return console.info(false);
    }
  }
  return console.info(true);
};

isPrime(11);

/**
 * 13. Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
 */

const EvenOdd = (num) => {
  if (!num) return console.info("Ingresa número a evaluar");
  num % 2 === 0 ? console.info("Par") : console.info("Impar");
};

EvenOdd(29);

/**
 * 14. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C")
 * devolverá 32°F.
 */

const tempConverter = (temp, unit) => {
  if (temp === undefined) return console.info("Ingresa número a evaluar");
  unit === "C"
    ? console.info(`${(temp * 9) / 5 + 32} Grados Farenehit`)
    : unit === "F"
    ? console.info(`${((temp - 32) * 5) / 9} Grados Celcius`)
    : console.warn("Debe ingresar C para Celcius o F para Farenheit");
};

tempConverter(32, "X");
