// 03-ejercicio.js

const { ingredientesPorReceta, tiempoDeCoccion, tiempoTotalDePreparacion } = require('../src/03-ejercicio.js');

// Tests para ingredientesPorReceta
test('Calcula correctamente los ingredientes necesarios para la receta', () => {
    expect(ingredientesPorReceta(5)).toEqual({ harina: 500, azúcar: 250, mantequilla: 150 });
    expect(ingredientesPorReceta(0)).toEqual({ harina: 0, azúcar: 0, mantequilla: 0 });
    expect(ingredientesPorReceta(1)).toEqual({ harina: 100, azúcar: 50, mantequilla: 30 });
});

// Tests para tiempoDeCoccion
test('Calcula correctamente el tiempo de cocción', () => {
    expect(tiempoDeCoccion(3)).toBe(45);
    expect(tiempoDeCoccion(0)).toBe(0);
    expect(tiempoDeCoccion(1)).toBe(15);
});

// Tests para tiempoTotalDePreparacion
test('Calcula correctamente el tiempo total de preparación', () => {
    expect(tiempoTotalDePreparacion(3)).toBe(60);
    expect(tiempoTotalDePreparacion(1)).toBe(20); 
    expect(tiempoTotalDePreparacion(0)).toBe(0);
});