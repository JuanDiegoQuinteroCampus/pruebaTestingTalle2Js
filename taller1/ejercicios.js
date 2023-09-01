// 3. Construir el algoritmo para determinar el voltaje de un
// circuito a partir de la resistencia y la intensidad de corriente.



 export const punto3 = (intensidad, resistencia) => {
  let int = parseInt(intensidad)
  let resis = parseInt(resistencia)
  let voltaje = int * resis; 

  return voltaje
  

 }