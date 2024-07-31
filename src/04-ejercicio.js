// Gestor de Tareas

/* Estás desarrollando una aplicación de gestión de tareas y necesitas implementar algunas funciones básicas para manejar las listas de tareas. Cada tarea tiene un título y una descripción. Tu objetivo es crear funciones que permitan agregar, eliminar, y buscar tareas en una lista. */

// Funciones

// 1. Aggregar Tareas
/* Crea una función agregarTarea que reciba una lista de tareas (array) y una nueva tarea (objeto con titulo y descripcion). La función debe agregar la nueva tarea al final de la lista y devolver la lista actualizada. */


function agregarTarea(lista, nuevaTarea) {
    lista.push(nuevaTarea);
    return lista;
}

// Ejemplo
const lista = [];
const nuevaTarea = { titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" };
agregarTarea(lista, nuevaTarea);
// => [{ titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" }]


// 2. Eliminar Tarea
/* 
Crea una función eliminarTarea que reciba una lista de tareas y el título de la tarea que deseas eliminar. La función debe eliminar la tarea que coincide con el título proporcionado y devolver la lista actualizada. Si la tarea no se encuentra, la lista debe permanecer igual.
*/


function eliminarTarea(lista, titulo) {
    return lista.filter((tarea) => tarea.titulo !== titulo);
}


//Ejemplo
const lista2 = [{ titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" }];
eliminarTarea(lista2, "Estudiar JavaScript");
// // => []



// 3. Buscar Tarea
/* Crea una función buscarTarea que reciba una lista de tareas y un término de búsqueda. La función debe devolver un array con todas las tareas que contienen el término de búsqueda en su título o descripción. */


function buscarTarea(lista, termino) {
    return lista.filter((tarea) => tarea.titulo.includes(termino) || tarea.descripcion.includes(termino));
}

// Ejemplo 
const lista3 = [
    { titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" },
    { titulo: "Comprar leche", descripcion: "Ir al supermercado y comprar leche" }
];
buscarTarea(lista3, "JavaScript");
//   // => [{ titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" }]

module.exports = { agregarTarea, eliminarTarea, buscarTarea }