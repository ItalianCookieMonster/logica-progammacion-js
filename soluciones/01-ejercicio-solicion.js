// Gestor de Combustible

// Descripción

/* 
    Eres responsable de una pequeña flota de vehículos y necesitas gestionar el combustible. Cada vehículo tiene un tanque de combustible de cierta capacidad y consume combustible a una tasa específica. Tu tarea es crear funciones que ayuden a calcular cuánto combustible es necesario para un viaje dado, y cuántos vehículos pueden realizar un viaje con una cantidad de combustible específica.

*/

// Funciones

//	1.	Combustible Necesario (combustibleNecesario):

/* Crea una función combustibleNecesario que reciba la distancia que se desea recorrer (en kilómetros) y el consumo de combustible del vehículo (en litros por kilómetro). La función debe devolver la cantidad total de combustible necesaria para completar el viaje. */


function combustibleNecesario(distancia_viaje, litros_por_kilometro) {
    return litros_por_kilometro * distancia_viaje

}

// Ejemplo 

combustibleNecesario(100, 0.05);
// => 5


//	2.	Vehículos Disponibles (vehiculosDisponibles):

/* Crea una función vehiculosDisponibles que reciba la cantidad total de combustible disponible (en litros) y el consumo de combustible por vehículo (en litros por kilómetro). La función debe devolver el número máximo de vehículos que pueden completar un viaje de 100 kilómetros con el combustible disponible. */


function vehiculosDisponibles(combustible_disponible, litros_por_kilometro) {
    const viaje = 100
    return combustible_disponible / (viaje * litros_por_kilometro)
}

// Ejemplo

vehiculosDisponibles(50, 0.05);
// => 10

// Notas:

/*	
    •	Asume que cada vehículo comienza con el tanque lleno y no se puede recargar durante el viaje.
    •	Este ejercicio te ayudará a practicar el uso de cálculos sencillos y la gestión de recursos utilizando funciones.

*/


module.exports = {
    combustibleNecesario,
    vehiculosDisponibles
}