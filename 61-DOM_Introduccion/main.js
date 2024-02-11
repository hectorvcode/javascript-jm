console.log("DOM Introducción");

console.log(window);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log(document.getSelection().toString());

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hola Mundo desde el DOM</h2>");
