import { punto4 } from "../../taller1/ejercicios";

describe('test punto 4', () => { 
    test('el resultado esperado: El resultado (Voltaje) entre de intensidad multiplicado por resistencia', () => { 
        const solicitados = [
            { nombre: "Juan", edad: parseInt(45) },
            { nombre: "Diego", edad: parseInt(23) },
            { nombre: "Daniel", edad: parseInt(67) }
        ];
        let context = `la persona con nmayor edad es ${solicitados.nombre} con ${solicitados.edad} años.`;
        let result = punto4(solicitados)
        expect(result).toBe(context);
        
     })
     
 });
