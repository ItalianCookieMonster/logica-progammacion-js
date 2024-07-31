
//01-ejercicio.js

const { combustibleNecesario, vehiculosDisponibles } = require('../src/01-ejercicio.js');


// Tests para combustibleNecesario
test('Calcula correctamente el combustible necesario para el viaje', () => {
    expect(combustibleNecesario(100, 0.05)).toBe(5);
    expect(combustibleNecesario(200, 0.1)).toBe(20);
    expect(combustibleNecesario(0, 0.05)).toBe(0);
});

// Tests para vehiculosDisponibles
test('Calcula correctamente el número de vehículos disponibles para el viaje', () => {
    expect(vehiculosDisponibles(50, 0.05)).toBe(10); 
    expect(vehiculosDisponibles(20, 0.1)).toBe(2);   
    expect(vehiculosDisponibles(0, 0.05)).toBe(0); 
    
});