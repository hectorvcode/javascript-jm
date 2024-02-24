console.log("----- BOM: Métodos -----");

/* window.alert("Alerta");
window.confirm("Confirmación");
window.prompt("Aviso");
alert("jon"); */

const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com/");
});

$btnCerrar.addEventListener("click", (e) => {
  //window.close();
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});
