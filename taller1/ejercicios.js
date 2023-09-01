/* 1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"
 */

export const punto1 = (nota1, nota2, nota3) => {
    let suma = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
  
    if (suma <= 3.9) {
      return `Estudié, el resultado de la suma es: ${suma}, sacó menos de 3.9`;
    } else {
      return `Becado, el resultado de la suma es: ${suma}, sacó más de 3.9`;
    }
  };
  

/* export  const punto1 = (nota1, nota2, nota3) =>{

 let suma = 0;
let notas = [];
for (let i = 0; i < 3; i++) {
     notas = parseFloat(prompt(`Porfavor ingrese sus tres notas`))
    
    suma += notas
}
return suma <= 3.9 ? alert(`Estudie, el resultado dee la suma es: ${suma}, sacó menos de 3.9`) : alert(`Becado, el resultado dee la suma es: ${suma}, sacó mas de 3.9`)

} */