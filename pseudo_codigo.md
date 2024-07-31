
 ## Algoritmos
**Encontrar el maximo de tres numeros**

INICIO
    DEFINIR num1 COMO ENTERO
    DEFINIR num2 COMO ENTERO
    DEFINIR num3 COMO ENTERO
    DEFINIR max COMO ENTERO

    ESCRIBIR "Introduce el primer número:"
    LEER num1

    ESCRIBIR "Introduce el segundo número:"
    LEER num2

    ESCRIBIR "Introduce el tercer número:"
    LEER num3

    SI num1 > num2 ENTONCES
        SI num1 > num3 ENTONCES
        max <- num1
        SINO
        max <- num3
        FIN_SI
    SINO
        SI num2 > num3 ENTONCES
        max <- num2
        SINO
        max <- num3
        FIN_SI
    FIN_SI

    ESCRIBIR "El número mayor es: ", max
FIN




## Lógica Booleana

1. AND (&& o AND)
Problema: Verificar si una receta es vegana y sin gluten.

2. OR (|| o OR)
Problema: Decidir si un lugar es apto para una mascota específica.

3. NOT (! o NOT)
Problema: Comprobar si un interruptor de luz está apagado.

1. Condicionales
Problema: Decidir el tipo de comida a preparar basado en la preferencia alimenticia.

2. Bucle for
Problema: Contar cuántos tipos de frutas hay en una canasta.




3. Bucle while
Problema: Rellenar un plato con galletas hasta que esté lleno.



Problema: Rellenar la canasta con fruta hasta el limite. 
INICIO
    DEFINIR limite_canasta ENTERO
    DEFINIR cantidad_frutas ENTERO
    DEFINIR contador_frutas ENTERO

    ESCRIBIR limite_canasta
    LEER limite_canasta

    ESCRIBIR cantidad_frutas
    LEER cantidad_frutas

    ESCRIBIR contador_frutas
    LEER contador_frutas

    MIENTRAS contador_frutas < limite_cansta
        cantidad_frutas = ESCRIBES('Cuantas galletas vas a añadir? ')
        contador_frutas = contador_frutas + cantidad_frutas

    ESCRIBIR('Hemos llegado al limite hay contador_frutas en la canasta')
FIN


