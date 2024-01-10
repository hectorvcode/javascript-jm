import { greetings, Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivo modulos");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 5));
console.log(calculos.sumar(3, 4));

let salutation = new Saludar();
console.log(salutation);

greetings();
