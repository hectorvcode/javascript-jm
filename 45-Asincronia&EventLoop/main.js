console.log("Asincronía");

/**
 * Procesamiento Single Thread
 *
 * El código se ejecuta en un solo hilo de ejecución en el navegador o entorno de Node
 *
 * Secuencialidad: las operaciones se realizan una tras otra, cada tarea se ejecuta después que la anterior ha finalizado
 *
 * EventLoop: Javascript utiliza este concepto para manejar operaciones asíncronas. Las funciones asíncronas se colocan en una cola de eventos y el motor de Javascript las maneja cuando el hilo principal está libre.
 *
 * Bloqueo de hilo: una operación que toma mucho tiempo o está bloqueada puede hacer que la interfaz de usuario (en el caso del navegador) se congele ya que todo se ejecuta en el mismo hilo
 */

/**
 * Procesamiento Multi Thread
 * En este entorno, se tienen varios hilos de ejecución que pueden realizar tareas simultáneamente. Cada hilo tiene su propia ruta de ejecución
 *
 * Paralelismo: las operaciones se pueden realizar en paralelo, lo que significa que varias tareas pueden ejecutarse al mismo tiempo
 *
 * Complejidad: la programación en un entorno multi hilo puede ser mas compleja debido a problemas potenciales como las condiciones de carrera y concurrencia
 *
 * Ejemplo en JavaScript: aunque en su esencia es de un solo hilo, se puede usar  conceptos como WebWorkers entre navegadores para realizar operaciones en un hilo sepoarado. Sin embargo, estos workers no interactúan directamente con el DOM ni comparten el mismo espacio de memoria, lo que reduce la complejidad de la concurrencia
 */

/**
 * Operaciones de CPU
 * Son aquellas que implican el procesamiento directo por parte de la unidad central de procesamiento del sistema. Incluyen cálculos matemáticos, manipulación de datos y otras operaciones
 *
 * Operaciones de I / O
 * Implican la interacción del programa con dispositivos de entrada / salida, como lectura o escritura en archivos, acceso a bases de datos, llamadas a API externaso interacciones con la red
 */

/**
 * Operaciones Concurrentes
 * La concurrencia se refiere a la capacidad de ejecutar varias tareas en un período de tiempo solapado, sin necesariamente ser simultáneas en tiempo real. Pueden ejecutarse de manera intercalada conmutando entre tareas en intervalos pequeños
 *
 * Operaciones Paralelas
 * El parelelismo implica la ejecución simultánea real de varias tareas donde cada tarea tiene su propio hilo de ejecuciónindependiente
 */

/**
 * Operaciones Bloqueantes
 * Es la operación que detiene la ejecución del hilo principal hasta que se complete. Durante este tiempo el hilo está inactivo y no  puede realizar otras tareas Por ejemplo una llamada síncrona a  una función que realiza una operación intensiva de CPU.
 *
 * Operaciones no bloqueantes
 * Son operaciones que permiten que otras tareas continúen mientras espera que una operación específica se complete. No detiene la ejecución del hilo principal Por ejemplo una llamada asíncrona a una función que realiza operaciones intensivas a CPU o de I/O no bloqueará el hilo principal, en su lugar el programa continuará ejecutando otras tareas y manejara el resultado de la operación cuando esté disponible
 */

/**
 * Operaciones sincronas
 * Son aquellas que se ejecutan en un orden predefinido, una detrás de otra, en el mismo hilo de ejecución
 *
 * Operaciones asincronas
 * Son aquellas que no bloquean el hilo principal y permiten que otras tareas continúen mientras esperan  finalización de una operación
 */

//Código Sincrono Bloqueante
(() => {
  console.log("Código Síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();

console.log("******Código Asíncrono********");

//Código Asincrono No Bloqueante
(() => {
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);

    dos();

    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();

/**
 * Pagina web para ver paso a paso
 * http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
 */

/**
 * Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un solo hilo (single thread) para operaciones de entrada y salida
 */
