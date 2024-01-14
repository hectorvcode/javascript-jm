console.log("Ejercicios 38");

/**
 * 15) Programa una función para convertir números de base binaria a decimal y viceversa,
 * pe. miFuncion(100,2) devolverá 4 base 10.
 */

const converterFunc = (num, base) => {
  if (!num) return console.warn("No ingresaste el número a evaluar");
  if (!base) return console.warn("No ingresaste la base a evaluar");
  if (base === 2) {
    // Convertir de binario a decimal
    const decimal = parseInt(num.toString(), 2);
    return console.info(decimal);
  } else if (base === 10) {
    // Convertir de decimal a binario
    const binario = num.toString(2);
    return console.info(binario);
  } else {
    // Manejar otras bases si es necesario
    console.log("Base no soportada");
    return null;
  }
};

converterFunc(1010111, 2);
converterFunc(87, 10);

/**
 * 16) Programa una función que devuelva el monto final después de aplicar un descuento
 * a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 */

const applyDiscount = (quantity, discPercent) => {
  if (!quantity || quantity < 0)
    return console.warn("Ingresa la cantidad correcta");
  if (!discPercent || discPercent < 0)
    return console.warn("Ingresa el descuento correcto");

  return console.info(quantity - quantity * (discPercent / 100));
};

applyDiscount(1000, 20);

/**
 * 17) Programa una función que dada una fecha válida determine cuantos años han pasado
 * hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

const calculateYears = (date) => {
  if (!date) return console.warn("No ingresaste la fecha a evaluar");
  const currentDate = new Date();
  const passedYears = currentDate.getFullYear() - date.getFullYear();
  if (
    date.getMonth() > currentDate.getMonth() ||
    (date.getMonth() === currentDate.getMonth() &&
      date.getDate() > currentDate.getDate())
  ) {
    return console.info(passedYears - 1);
  }
  return console.info(passedYears);
};

calculateYears(new Date(1984, 4, 23));
