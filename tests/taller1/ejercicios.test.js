import { punto5 } from "../../taller1/ejercicios";

describe('test punto 5', () => { 
    test('lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia', () => { 
       let primero = 7
       let segundo = 5
       let result = punto5(primero, segundo)
       expect(primero).toBeGreaterThan(segundo);
       expect(result).toBe(result)
     }),
     test('lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia', () => { 
        let primero = 3
        let segundo = 5
        let result = punto5(primero, segundo)
        expect(primero).toBeLessThan(segundo);
        expect(result).toBe(result)
      })
     
 });
