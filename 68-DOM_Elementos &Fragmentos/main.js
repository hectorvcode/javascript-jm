console.log("----- Elementos y Fragmentos -----");

const $figure = document.createElement("figure");
$img = document.createElement("img");
$figcaption = document.createElement("figcaption");
$figcaptionText = document.createTextNode("Plants");
$cards = document.querySelector(".cards");
$figure2 = document.createElement("figure");

$img.setAttribute("src", "https://picsum.photos/id/306/200");
$img.setAttribute("alt", "Flower");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure);

//Crear elemento dinámicamente con innerHTML
$figure2.innerHTML = `
  <img src="https://picsum.photos/id/324/200" alt="Nature" />
  <figcaption>Forest</figcaption>  
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//Varios elementos
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
$ul = document.createElement("ul");
document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

//Agreagar otra lista de forma dinámica
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
$ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
//Inicializar mediante cadena vacía
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//Usar fragmentos para no interactuar directamente en el DOM
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
