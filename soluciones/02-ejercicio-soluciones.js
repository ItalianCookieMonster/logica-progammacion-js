/* Lasaña Deliciosa

¡Felicidades! Te has convertido en el chef de tu restaurante favorito de lasaña.

1. Definir el tiempo esperado de horno en minutos
Defina la constante EXPECTED_MINUTES_IN_OVEN que representa cuántos minutos debe estar la lasaña en el horno. Debe exportarse. Según el libro de cocina, el tiempo de horno esperado en minutos es 40. */

const EXPECTED_MINUTES_IN_OVEN = 40

// 2. Tiempo de preparación

/* Para empezar, necesitas saber cuántas capas de lasaña has preparado y el tiempo que necesitas para cocinarla. Para simplificar, asume que cada capa de lasaña tarda 2 minutos en prepararse. Escribe una función tiempoDePreparacion que reciba el número de capas como argumento y devuelva el tiempo total de preparación. */


// Escribe una función tiempoDePreparacion que reciba el número de capas como argumento y devuelva el tiempo total de preparación.

function tiempoDePreparacion(capas) {
	return 2 * capas
}

//Ejemplo 
tiempoDePreparacion(3);


// Tiepo en el horno

/* Una vez que la lasaña está preparada, necesitas hornearla. El tiempo total de horneado recomendado es de 40 minutos. Escribe una función tiempoRestanteEnHorno que reciba el número de minutos que la lasaña ha estado en el horno y devuelva el número de minutos restantes. */


function tiempoRestanteEnHorno(minutos) {
	return EXPECTED_MINUTES_IN_OVEN - minutos
}

//Ejemplo
tiempoRestanteEnHorno(20);


/* Tiempo total de cocina

Finalmente, puedes calcular el tiempo total que has pasado preparando y cocinando la lasaña. Escribe una función tiempoTotalDeCocina que reciba el número de capas preparadas y el tiempo que la lasaña ha estado en el horno. Debe devolver el tiempo total en minutos. */


function tiempoTotalDeCocina(capas, minutos) {
	return tiempoDePreparacion(capas) + minutos
}

tiempoTotalDeCocina(3, 20);


/* Sugerencias para los nombres de las funciones y variables:

	1.	tiempoDePreparacion: Calcula el tiempo de preparación basado en el número de capas.
	2.	tiempoRestanteEnHorno: Calcula el tiempo restante para que la lasaña esté completamente horneada.
	3.	tiempoTotalDeCocina: Calcula el tiempo total de cocina sumando el tiempo de preparación y el tiempo en el horno. 

*/


/* Notas

	•	No olvides que cada capa de lasaña tarda 2 minutos en prepararse.
	•	El tiempo total recomendado de horneado es de 40 minutos.

Con estas funciones, podrás gestionar el tiempo necesario para preparar y cocinar una deliciosa lasaña. ¡Buena suerte y buen provecho!

*/

module.exports = {
	tiempoDePreparacion,
	tiempoRestanteEnHorno,
	tiempoTotalDeCocina,
};