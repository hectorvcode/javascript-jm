console.log("Temporizadores");

console.log("Inicio");

/* 

setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto se ejecuta sólo una vez");
}, 3000);

setInterval(() => {
  console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente");
}, 1000); 

//Nos puede servir para un reloj
setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

let temporizador = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador);
console.log("después del clearTimeout");

*/

let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizador);
console.log("después del clearInterval");
