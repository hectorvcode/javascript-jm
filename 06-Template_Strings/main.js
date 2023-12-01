/** Concatenación
 * Es la combinación de dos o más cadenas de texto (strings) en una sola cadena mas larga
 */

let nombre = "Hector";
let apellido = "Vasquez";

let saludo = "Hola, mi nombre es " + nombre + " " + apellido;
console.log(saludo)

/** Interpolación
 * Es la inserción de valores de variables o expresiones dentro de una cadena de texto
 * Usamos template strings
 */

let saludo2 = `Hello, mi name is ${nombre} ${apellido}`;
console.log(saludo2);

/**Generación dinámica
 * 
 */

let ul = "<ul><li>Primavera</li><li>Verano</li><li>Invierno</li><li>Otoño</li></ul>";

let ul2 = `
  <ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Invierno</li>
    <li>Otoño</li>
  </ul>
`;

let ul3 = "<ul>";
ul3 += "<li>Primavera</li>";
ul3 += "<li>Verano</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
ul3 += "</ul>"

console.log(ul);
console.log(ul2);
console.log(ul3);