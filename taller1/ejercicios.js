// 4. Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.


export const punto4 =(nombre, edad)=>{
  let info = [];
  let info2;
  let num = 0;
  let nombreM;
  let edadM;
  for (let i = 0; i < 3; i++) {
       info2 = {
          nombre: nombre, 
          edad: parseInt(edad)
      }
      info.push(info2);
  }
  info.forEach((p)=>{
   
      if (p.edad > num) {
          nombreM = p.nombre;
          edadM = p.edad;
          num = edadM;
      }
  })
  let resultado = `la persona con nmayor edad es ${nombreM} con ${edadM} años.`
  return resultado;
  

}







 export const punto3 = (intensidad, resistencia) => {
  let int = parseInt(intensidad)
  let resis = parseInt(resistencia)
  let voltaje = int * resis; 

  return voltaje
  

 }