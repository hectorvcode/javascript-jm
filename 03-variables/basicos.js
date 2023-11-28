var hola = "Hola Mundo!";
console.log(hola);

let hello = "Hello World";
console.log(hello)

console.log("window", window);
console.log("window hola", window.hola);
console.log("window hello", window.hello);

//ámbito de bloque
console.log("*******************var*************************");

var musica = "Rock";
console.log("Variable música antes del bloque", musica);


/** Esto es un comentario
 * de varias
 * lineas
*/

//Esto es un bloque - comentario de una linea

{
    var musica = "Pop"; //Por hoisting musica asume a nivel global el valor Pop
    console.log("Variable música dentro del bloque", musica);
}

console.log("Variable musica después del bloque", musica);

console.log("*******************let*************************");


//Ahora vamos a usar let

let musica2 = "Rock";
console.log("variable musica antes del bloque", musica2);

{
    let musica2 = "Pop";
    console.log("Variable musica dentro del bloque",musica2);
}

console.log("Variable musica despues del bloque",musica2);

