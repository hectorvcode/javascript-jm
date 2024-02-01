console.log("Promesas");

/**
 * En JavaScript una promesa es un objeto que representa la eventual finalización o el fracaso de una operación asíncrona. Proporciona una manera más limpia y estructurada de manejar operaciones asíncronas en comparación con el uso de funciones de retorno llamada callbacks anidadas. Tienen tres estados posibles
 *
 * 1. Pending: estado inicial. La promesa está en espera de que se resuelva o sea rechazada
 * 2. Fullfilled: la operación asíncrona se ha completado con éxito. La promesa se resuelve con un valor
 * 3. Rejected: la operación asíncrona ha fallado. La promesa se rechaza con una razón (mensaje de error)
 */

//Sintaxis
const miPromise = new Promise((resolve, reject) => {
  //Lógica asíncrona aqui
  //Si la operación es exitosa, llamamos a resolve con el resultado
  //Si hay un error llamamos reject con el motivo del error
});

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(
      `Error, el valor "${value}" ingresado, no es un número`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicia promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  })
  .catch((err) => console.error(err));
