console.log("Main file");

/**
 * Expresión Regular
 * Conocida como "regex" o "RegExp", es un objeto que describe un patrón de búsqueda
 * en las cadenas de texto. Las expresiones regulares proporcionan una forma poderosa y
 * flexible de buscar y manipular texto basándose en patrones específicos
 */

//Utilizando la clase RegExp
let regex = new RegExp("patron");

//Utilizando la notación literal
let regexLiteral = /patron/;

/**
 * Ejemplos de patrones
 * /abc/ : busca la secuencia de caracteres "abc" en una cadena
 * /[0-9] : busca cualquier dígito numérico en una cadena
 * /a|b/ : busca la letra "a" o "b" en una cadena
 * /\d+/ : busca uno o más dígitos consecutivos en una cadena
 * /^inicio/ :  busca la palabra inicio al principio de una cadena
 */

/**
 * Métodos principales
 */

//1. test(str) : comprueba si el patron está presente en la cadena str y devuelve true o false
let regex1 = /abc/;
console.log(regex1.test("abcdef"));

//2. exec(str) : devuelve una matriz con información sobre la primera coincidencia encontrada
// en la cadena str o null si no hay coincidencias

let regex2 = /\d+/;
console.log(regex2.exec("abc123"));

//3. match(regex) : devuelve una matriz con todas las coincidencias encontradas en la
//cadena o null si no hay coincidencias

let str1 = "abc123abc456";
let regex3 = /\d+/g;
console.log(str1.match(regex3));

//4. replace(regex, replacement) : reemplaza las coincidencias del patron con el texto especificado

let str4 = "Hola mundo";
let regex4 = /mundo/;
let nuevoStr = str4.replace(regex4, "amigo");
console.log(nuevoStr);

/**
 * Modificadores
 * g (global): busca todas las coincidencias en lugar de detenerse después de la primera
 * i (insensitive): realiza una búsqueda sin distinción entre mayúsculas y minúsculas
 */

let regex5 = /abc/gi;
let str5 = "ABCabc";
console.log(str5.match(regex5));

/**
 * Mircha
 * Expresiones Regulares
 * Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente
 * utilizada para la búsqueda de patrones en cadenas de caracteres
 *
 * https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 *
 */

let cadena =
  "Lorem ipsum dolor sit amet, 123123 lorem consectetur adipiscing elit. Sed lorem vehicula odio eu nisi interdum rutrum. Praesent consectetur enim mauris, dictum pharetra mauris lobortis egestas. Donec non dolor id nulla commodo luctus. Maecenas dui sapien, tincidunt at tortor et, efficitur sagittis risus. Sed aliquet, orci eu scelerisque pulvinar, est nisl fringilla ante, non vulputate odio ante a ex. In et arcu imperdiet, elementum nulla quis, tempus lorem. Nam in massa ut tellus cursus eleifend.";

let expReg = new RegExp("lorem", "ig");
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

let expReg2 = /lorem{1,3}/gi;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
