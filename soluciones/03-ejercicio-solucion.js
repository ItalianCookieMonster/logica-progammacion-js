// Calculadora de Galletas

/*
Descripción

Eres el encargado de una panadería y necesitas calcular la cantidad de ingredientes necesarios para hacer galletas. Cada receta de galletas requiere cierta cantidad de ingredientes y cada receta tiene diferentes tiempos de cocción. Tu tarea es crear funciones que ayuden a calcular estos datos.

*/

// Funciones

/*	1.	Ingredientes por Receta:
Crea una función ingredientesPorReceta que reciba la cantidad de galletas que deseas hacer y devuelva un objeto con las cantidades de ingredientes necesarios. Usa la siguiente receta básica para cada 1 galleta:
    •	Harina: 100 gramos
    •	Azúcar: 50 gramos
    •	Mantequilla: 30 gramos

*/


// Escribe tu código
ingredientesPorReceta = (galletas) => {

    return { harina: 100 * galletas, azúcar: 50 * galletas, mantequilla: 30 * galletas }
}



// Ejemplo 
ingredientesPorReceta(5);
// { harina: 500, azúcar: 250, mantequilla: 150 }

// 2.Tiempo de Cocción:

/* 
Crea una función tiempoDeCoccion que reciba el número de bandejas de galletas (asumiendo que cada bandeja puede contener 10 galletas) y devuelva el tiempo total de cocción en minutos. Cada bandeja de galletas necesita 15 minutos en el horno.
 */


// Escribe tu código

function tiempoDeCoccion(bandejas){
    return 15 * bandejas
}

// Ejemplo:
tiempoDeCoccion(3);
// 45


// 3. Tiempo total preparacion

/* 
Crea una función tiempoTotalDePreparacion que reciba el número de galletas y el número de bandejas y devuelva el tiempo total de preparación en minutos. Asume que cada bandeja toma 5 minutos para prepararse antes de entrar al horno, además del tiempo de cocción. 
*/


// Escribe tu código
function tiempoTotalDePreparacion(bandejas) {
    const tiempoPreparacionBandejas = bandejas * 5;
    const tiempoCoccion = tiempoDeCoccion(bandejas); 
    return tiempoPreparacionBandejas + tiempoCoccion;
}

// Ejemplo:
tiempoTotalDePreparacion(5, 3);
// 35


module.exports = {
    ingredientesPorReceta,
    tiempoDeCoccion,
    tiempoTotalDePreparacion,
};
