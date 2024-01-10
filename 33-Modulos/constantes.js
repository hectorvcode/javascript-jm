export const PI = Math.PI;

export let usuario = "Hector";

//primero la declaración y luego la exportación por default
let password = "qwerty";
export default password;

//Función expresada
const hello = () => console.log("Hey");

//Función declarada
export function greetings() {
  console.log("Hola módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola desde la clase");
  }
}
