//Constantes se usan cuando tengamos variables que no van a cambiar de valor

const PI = 3.1416;
console.log(PI);

//Las constantes se deben declarar e inicializar al mismo tiempo, la siguiente declaración genera error
//const NUEVE;

let a; //let permite la declaración de una variable vacía

const NUEVE = 9;

a = "kenai";
console.log(a);

//No puedes reasignar valores a una constante, genera error
//PI = 3.15;

let objeto = {
    nombre: "John",
    edad: 35
}

let colores = ["amarillo", "azul", "rojo", "blanco", "negro"];

console.log(objeto);
console.log(colores);

//Agregando elementos
objeto.correo = "johnmircha@gmail.com";
colores.push("naranja");

console.log("Agregando", objeto);
console.log("Agregando", colores);


//Los valores compuestos no se accede al valor sino a la referencia
//Se permite agregar informacion a los datos compuestos

const PC = {
    procesador: "intel",
    ram: 8
}

const CELULAR = ["xiaomi", "samsung"]

//Sigue siendo el mismo objeto y el mismo arreglo, por lo que JS permite cambiar las propiedades y elementos
console.log("Objeto original", PC);
console.log("Arreglo original", CELULAR);

PC.disco = 512;
CELULAR.push("motorola");

console.log("Objeto despues", PC);
console.log("Arreglo despues", CELULAR);


/** RECOMENDACIONES
 * Olvidate de var, todo lo que encuentres con var cambialo a let
 * let: cuando declares valores variables, cuando declares una variable para luego asignar valor
 * const: cuando no vayas a cambiar de tipo de dato
 */