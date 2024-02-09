console.log("Propiedades Dinámicas de los Objetos");

/**
 * Computed properties (propiedades calculadas)
 * Se utiliza para describir propiedades de objetos cuyos nombres se calculan dinámicamente mediante expresiones. Estas propiedades también se conocen como "dynamic properties" (propiedades dinámicas) o "dynamic keys" (claves dinámicas)
 */

const objUsuarios = {
  [`id_${Math.round(Math.random() * 100 + 5)}`]: "valor aleatorioa",
};
console.log(objUsuarios);

const usuarios = ["Jon", "Irma", "Miguel", "Kala", "Kenai"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));
console.log(objUsuarios);
