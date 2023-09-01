import { punto2 } from "../../taller1/ejercicios";

describe('test punto 2', () => { 
    test('el resultado esperado: indicar si el numero es par o impar', () => { 
        const number = punto2(11);
        expect(number).toBe("El número es impar y mayor que 10");
     }),
     test('el resultado esperado: indicar si el numero es par o impar y si es mayor de 10', () => { 
        const number = punto2(9);
        expect(number).toBe("El número es impar y menor o igual a 10");
     }),
     test('el resultado esperado: indicar si el numero es par o impar y si es mayor de 10', () => { 
        const number = punto2(12);
        expect(number).toBe("El número es par y mayor que 10");
     }),
     test('el resultado esperado: indicar si el numero es par o impar y si es mayor de 10', () => { 
        const number = punto2(6);
        expect(number).toBe("El número es par y menor o igual a 10");
     })
     
 });
