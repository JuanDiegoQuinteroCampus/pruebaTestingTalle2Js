// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.

export const punto5 =(num1, num2)=>{
  let primero = parseInt(num1)
  let segundo = parseInt(num2)

  let result=""
  let Suma = parseFloat(primero) + parseFloat(segundo)
  let Resta= parseFloat(primero) - parseFloat(segundo)
  let Producto = parseFloat(primero) * parseFloat(segundo)
  let División = parseFloat(primero) / parseFloat(segundo)

  if (num1 > num2) {
    result = "la suma de estos dos numeros es: " + Suma,". Y la resta de estos dos números es: " + Resta
  } else {
    result = "El producto de estos dos numeros es: " + Producto,". " + "Y la división de estos dos números es: " + División
  }
  return result;
}







