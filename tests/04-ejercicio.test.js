// 04-ejercicio.js

const { agregarTarea, eliminarTarea, buscarTarea } = require('../src/04-ejercicio');

// Tests para agregarTarea
test('Agrega una tarea a la lista', () => {
    let lista = [];
    const tarea = { titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" };
    lista = agregarTarea(lista, tarea);
    expect(lista).toEqual([tarea]);
});

// Tests para eliminarTarea
test('Elimina una tarea de la lista por su título', () => {
    let lista = [{ titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" }];
    lista = eliminarTarea(lista, "Estudiar JavaScript");
    expect(lista).toEqual([]);
});

test('No elimina ninguna tarea si el título no existe', () => {
    let lista = [{ titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" }];
    lista = eliminarTarea(lista, "No existe");
    expect(lista).toEqual([{ titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" }]);
});

// Tests para buscarTarea
test('Busca tareas que contienen el término de búsqueda en el título o descripción', () => {
    const lista = [
        { titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" },
        { titulo: "Comprar leche", descripcion: "Ir al supermercado y comprar leche" }
    ];
    expect(buscarTarea(lista, "JavaScript")).toEqual([
        { titulo: "Estudiar JavaScript", descripcion: "Repasar conceptos básicos de JS" }
    ]);
    expect(buscarTarea(lista, "leche")).toEqual([
        { titulo: "Comprar leche", descripcion: "Ir al supermercado y comprar leche" }
    ]);
    expect(buscarTarea(lista, "no existe")).toEqual([]);
});