import { punto1 } from "../../taller1/punto1";

describe('test punto 1', () => { 
    test('el resultado esperado: número mayor o menor a 3.9', () => { 
        const resultado = punto1(3.0, 4.0, 2.0);
        expect(resultado).toBe("Becado, el resultado de la suma es: 9, sacó más de 3.9");
     }),

     test('el resultado no debe ser indefinido', () => { 
        const resultado = punto1(3.0, 4.0, 2.5);
        expect(resultado).not.toBeUndefined();
     })
 });
