// 2. Dado un número indicar si es par o impar y si es mayor de 10.
 export const punto2 = (numero) => {
  let number = parseInt(numero)
  let resultado = ""
  if (number % 2 === 0) {
    resultado = "El número es par";
  } else {
    resultado = "El número es impar";
  }

  if (number > 10) {
    resultado += " y mayor que 10";
  } else {
    resultado += " y menor o igual a 10";
  }

  return resultado;

 }