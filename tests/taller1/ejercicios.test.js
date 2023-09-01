import { punto3 } from "../../taller1/ejercicios";

describe('test punto 3', () => { 
    test('el resultado esperado: El resultado (Voltaje) entre de intensidad multiplicado por resistencia', () => { 
        let intensidad = 2
        let resistencia = 5
        let voltaje = punto3(intensidad, resistencia)

        expect(voltaje).toBe(intensidad * resistencia);
     })
     
 });
