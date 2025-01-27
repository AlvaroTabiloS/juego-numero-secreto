// Crear una lista vacía llamada "listaGenerica"
const listaGenerica = [];

// Crear una lista de lenguajes de programación
const lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agregar elementos a la lista "lenguagesDeProgramacion"
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Función para mostrar todos los elementos de la lista "lenguagesDeProgramacion"
function mostrarLenguajes() {
    console.log("Lista de lenguajes de programación:");
    lenguagesDeProgramacion.forEach((lenguaje) => console.log(lenguaje));
}

// Función para mostrar los elementos de "lenguagesDeProgramacion" en orden inverso
function mostrarLenguajesInvertidos() {
    console.log("Lista de lenguajes en orden inverso:");
    [...lenguagesDeProgramacion].reverse().forEach((lenguaje) => console.log(lenguaje));
}

// Función para calcular el promedio de los elementos en una lista de números
function calcularPromedio(listaNumeros) {
    if (listaNumeros.length === 0) return 0;
    const suma = listaNumeros.reduce((acc, num) => acc + num, 0);
    return suma / listaNumeros.length;
}

// Función para mostrar el número más grande y el más pequeño en una lista
function mostrarMayorYMenor(listaNumeros) {
    if (listaNumeros.length === 0) {
        console.log("La lista está vacía.");
        return;
    }
    const max = Math.max(...listaNumeros);
    const min = Math.min(...listaNumeros);
    console.log(`Número más grande: ${max}`);
    console.log(`Número más pequeño: ${min}`);
}

// Función que devuelve la suma de todos los elementos en una lista
function sumarElementos(listaNumeros) {
    return listaNumeros.reduce((acc, num) => acc + num, 0);
}

// Función que devuelve la posición de un elemento en la lista o -1 si no existe
function encontrarPosicion(lista, elemento) {
    const posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : -1;
}

// Función que recibe dos listas y devuelve una nueva lista con la suma elemento a elemento
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.error("Las listas deben tener el mismo tamaño.");
        return [];
    }
    return lista1.map((num, index) => num + lista2[index]);
}

// Función que recibe una lista y devuelve una nueva lista con el cuadrado de cada número
function calcularCuadrados(listaNumeros) {
    return listaNumeros.map((num) => num * num);
}

// Ejemplo de uso
mostrarLenguajes();
mostrarLenguajesInvertidos();
console.log("Promedio:", calcularPromedio([10, 20, 30, 40]));
mostrarMayorYMenor([10, 5, 8, 20, 1]);
console.log("Suma de elementos:", sumarElementos([1, 2, 3, 4]));
console.log("Posición de 'JavaScript':", encontrarPosicion(lenguagesDeProgramacion, 'JavaScript'));
console.log("Suma de listas:", sumarListas([1, 2, 3], [4, 5, 6]));
console.log("Cuadrados:", calcularCuadrados([1, 2, 3, 4]));