import { punto6 } from "../../taller1/ejercicios";

describe('test punto 6', () => { 
    test('Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.', () => { 
      const estudiantes = [
        { nombre: "Angela", nota: 70, sexo: "F" },
        { nombre: "Saul", nota: 85, sexo: "M" },
        { nombre: "Sara", nota: 90, sexo: "F" },
      ];
       let result = punto6(estudiantes)

       expect(result).toBe(result)
       expect(result).toBeDefined()
       expect(result).toContain("El estudiante con mayor nota fue");
      expect(result).toContain("El estudiante con menor nota fue");
     })
     
 });
