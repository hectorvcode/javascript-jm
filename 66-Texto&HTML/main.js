console.log("----- Texto y HTML -----");

const $whatIsDOM = document.getElementById("que-es");
console.log($whatIsDOM);

let text = `
  <p>
    El Modelo de Objetos del documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML
  </p>
  <p>
    Este provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
  </p>
  <p>
    <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores</mark>
  </p>
`;

//No hace parte del estandar
$whatIsDOM.innerText = text;

//Si hace parte del estandar
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;

//Reemplaza el elemento del DOM
$whatIsDOM.outerHTML = text;
