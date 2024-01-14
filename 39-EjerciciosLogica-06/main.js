console.log("Ejercicios 36");

/**
 * 18) Programa una función que dada una cadena de texto cuente el número
 * de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva
 * Vocales: 4, Consonantes: 5.
 */

const countChars = (str) => {
  if (!str) return console.warn("No ingresaste la cadena a evaluar");

  let vowelsCounter = 0;
  let consonantsCounter = 0;

  str
    .toLowerCase()
    .split("")
    .forEach((character) => {
      if (["a", "e", "i", "o", "u"].includes(character)) {
        vowelsCounter++;
      } else if (character.match(/[a-z]/i)) {
        consonantsCounter++;
      }
    });
  return console.info(
    `La cadena ${str} tiene ${vowelsCounter} vocales y ${consonantsCounter} consonantes`
  );
};

countChars("Hola Mundo");

/**
 * 19) Programa una función que valide que un texto sea un nombre válido,
 * pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */

const validateName = (name) => {
  const validateFormat =
    /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/;

  if (validateFormat.test(name)) {
    return console.info(true);
  } else {
    return console.info(false);
  }
};

validateName("Jonathan MirCha");

/**
 * 20) Programa una función que valide que un texto sea un email válido,
 * pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

const validateEmail = (email) => {
  if (!email) return console.warn("No ingresaste el email a evaluar");

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = regexEmail.test(email);
  return console.info(isValidEmail);
};

validateEmail("usuario@example.com");
validateEmail("usuarioexample.com");
validateEmail("usuario@com");
