console.log("Main");

console.log(window);

//window.alert("Hola esto es una alerta");
//window.confirm("Hola esto es una confirmación");

//Permite ingreso de un valor
//window.prompt("Hola esto es un prompt");

let alerta = alert("Hola esto es una alerta");
confirmacion = confirm("Hola esto es una confirmación");
aviso = prompt(
  "Hola este es un prompt y le permite al usuario ingresar un valor"
);

//Solo para enviar mensaje al usuario
console.log(alerta);

//Si le damos ok es true y cancelar es false
console.log(confirmacion);

//Ingresas algo y eso se almacena o si cancelar devuelve null
console.log(aviso);
