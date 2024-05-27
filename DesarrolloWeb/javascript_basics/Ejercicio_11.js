function ordenarCadenas(listaCadenas) {
    // toma la lista  de cadenas de texto y devuelve una nueva lista con las cadenas ordenadas.
    return listaCadenas.slice().sort();
}

//casos de prueba
const casosPrueba = [
    ["manzana", "banana", "uva", "pera", "kiwi"],
    ["pajaro", "tigre", "gato", "aguila"],
    ["azul", "rojo", "verde", "amarillo"]
];

//se imprimen los casos de prubeas
casosPrueba.forEach((listaCadenas) => {
    const cadenasOrdenadas = ordenarCadenas(listaCadenas);
    console.log("original:", listaCadenas);
    console.log("ordenada:", cadenasOrdenadas);
    console.log("----------------------");
});
