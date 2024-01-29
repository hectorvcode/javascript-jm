console.log("Callbacks");

/**
 * Callback
 * Es una función de retorno que se pasa como argumento otra función y se ejecuta después que cierto evento o tarea haya ocurrido
 *
 * Las funciones de retorno son fundamentales en un entorno asíncrono, como el de JavaScript donde las operaciones pueden llevar tiempo y no bloquean el hilo principal de ejecución
 */

function operacionAsincrona(callback) {
  setTimeout(function () {
    console.log("La operación asíncrona ha terminado");
    callback(); //Llamada a la función de retorno de llamada
  }, 1000);
}

function miCallback() {
  console.log("El callback se ha ejecutado");
}

//Llamada a la función con un callback
//operacionAsincrona(miCallback);

/**
 * Mircha
 */

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
          });
        });
      });
    });
  });
});
