function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

//Las funciones sumar y restar se incluyen en el export de esta función
export const aritmetica = {
  sumar,
  restar,
};
