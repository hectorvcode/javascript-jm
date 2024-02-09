console.log("proxies");

/**
 * Proxies
 * Son objetos especiales que permiten la creación de un objeto envuelto (proxy) alrededor de otro objeto objetivo (target). Este objeto proxy intercepta las operaciones realizadas en el objeto objetivo, permitiendo controlar y personalizar su comportamiento. Los proxies se utilizan comunmente para implementar la programación defensiva, la manipulación de objetos y la observación de cambios
 */

console.log("-----   Mircha   -----");

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad ${prop} no existe en el objeto persona`
      );
    }
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad ${prop} solo acepta letras y espacios en blanco`
      );
    }
    obj[prop] = valor;
  },
};

const jon = new Proxy(persona, manejador);
jon.nombre = "Jon19";
jon.apellido = "Mircha";
jon.edad = 35;
jon.twitter = "@jonmircha";

console.log(jon);
console.log(persona);
