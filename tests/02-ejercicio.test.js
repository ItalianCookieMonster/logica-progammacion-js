// 02-ejercicio.js

const { tiempoDePreparacion, tiempoRestanteEnHorno, tiempoTotalDeCocina } = require('../src/02-ejercicio.js');

// Tests para tiempoDePreparacion
test('Calcula el tiempo de preparación correctamente', () => {
    expect(tiempoDePreparacion(3)).toBe(6);
    expect(tiempoDePreparacion(0)).toBe(0);
    expect(tiempoDePreparacion(5)).toBe(10);
});

// Tests para tiempoRestanteEnHorno
test('Calcula el tiempo restante en el horno correctamente', () => {
    expect(tiempoRestanteEnHorno(20)).toBe(20);
    expect(tiempoRestanteEnHorno(40)).toBe(0);
    expect(tiempoRestanteEnHorno(0)).toBe(40);
});

// Tests para tiempoTotalDeCocina
test('Calcula el tiempo total de cocina correctamente', () => {
    expect(tiempoTotalDeCocina(3, 20)).toBe(26);
    expect(tiempoTotalDeCocina(0, 40)).toBe(40);
    expect(tiempoTotalDeCocina(5, 0)).toBe(10);
});