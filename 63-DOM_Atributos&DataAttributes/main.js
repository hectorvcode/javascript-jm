console.log("Atributos y Data-Attributes");

/**
 * Atributos
 * Son pares nombre/valor que configuran características de elementos HTML como <div>, <a>, <img>. Algunos ejemplos son:
 * id - identificador único del elemento
 * class - clase para aplicar estilos CSS
 * href - url de destino de un link
 * src - ruta a un recurso como una imagen
 */

/**
 * Data attributes
 * Son atributos personalizados precedidos por data- que permiten almacenar datos en las etiquetas HTML. Por ejemplo:
 * <div data-nombre="Juan" data-edad="25">
 * Desde JavaScript se puede acceder a los valores de cualquier atributo usando:
 * element.getAttribute("nombreAtributo")
 * element.dataset.nombreAtributo(para data attributes)
 * También se pueden modificar atributos con setAttribute()
 */

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
console.log("printing linkDOM: ", $linkDOM);

//10:15

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com/@jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));

//Data attributes (data-)
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));
