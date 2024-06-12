//funcion que recibe una lista de nuero para oredenarlos de manera descendente
function ordenDescendente(listaNumeros) {
    //listaNumeros.slice() crea una copia de la lista
    //sort() para ordenar de forma descendente los numeros de la lista
    return listaNumeros.slice().sort((a, b) => b - a);
}

// array de casos de prueba
const casosPrueba = [
    [3, 1, 4, 1, 5, 9, 2, 6, 5],
    [10, 5, 8, 3, 9, 2],
    [7, 3, 1, 6, 4, 2, 8]
];

// se ejecutan los casos de prueba
casosPrueba.forEach((num) => {
    const numerosOrdenados = ordenDescendente(num);
    console.log("lista:", num);
    console.log("ordenados:", numerosOrdenados);
    console.log("----------------------");
});
