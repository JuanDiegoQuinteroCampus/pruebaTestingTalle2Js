// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.

export const punto6 = (estudiantes) => {
  let nombreM, nombrem, notaM = -Infinity, notai = Infinity, sexoF = 0, sexoM = 0;
let text = ""
  for (const estudiante of estudiantes) {
    const { nombre, nota, sexo } = estudiante;
    
    if (nota > notaM) { notaM = nota; nombreM = nombre; }
    if (nota < notai) { notai = nota; nombrem = nombre; }
    if (sexo === "F") sexoF++;
    else if (sexo === "M") sexoM++;
  }
  text =`El estudiante con mayor nota fue ${nombreM} con nota ${notaM}- El estudiante con menor nota fue ${nombrem} con nota ${notai}`
return text;

}






