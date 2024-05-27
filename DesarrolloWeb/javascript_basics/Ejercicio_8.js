//se crea la funcion con el arerglo como argumento de entrada
function quitaDuplicados(arreglo) {
    //se crea la lista vacioa donde se van a guardan los nuevos elementos
    const unElemento = [];

    //itera cada elemnto de la loista usando forEach
    arreglo.forEach(elemento => {
        //si el elemento no esta en el arreglo entonces se ejecuta el siguiente codigo
        if (!unElemento.includes(elemento)) {
            //se garega al arreglo
            unElemento.push(elemento);
        }
    });
    return unElemento;
}

// lista con los casos de pruebas
const casosPrueba = [
    [1, 0, 1, 1, 0, 0],
    [5, 2, 5, 7, 2, 7, 8, 8],
    ['a', 'b', 'c', 'a', 'b']
];

// se ejecitan los casos de pruebas 
casosPrueba.forEach((arreglo, index) => {
    const resultado = quitaDuplicados(arreglo);
    console.log('prueba');
    //utiliza JSON.stringify() que sirva para facilitar la lectura 
    console.log("input:", JSON.stringify(arreglo));
    console.log("output:", JSON.stringify(resultado));
    console.log("----------------------");
});



//Nota: La función JSON.stringify() en JavaScript se utiliza para convertir un valor JavaScript en una cadena JSON. Toma un objeto JavaScript o un valor primitivo como argumento y devuelve una cadena que representa ese objeto o valor en formato JSON.
