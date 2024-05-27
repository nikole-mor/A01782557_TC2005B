//función que recibe la lista de cadenas como arguumento de entrada
function longitudMasCorta(listas) {
    //verifica que la listas de cadenas si contengan algo de lo contrario devuelve 0
    if (listas.length === 0) {
        return 0;
    }

    //se inicia la variable longitudMinima con la longitud de la primera cadena en la lista
    let longitudMinima = listas[0].length;

    //bucle que recorre las cadenas 
    for (let i = 1; i < listas.length; i++) {
        //con cada iteracion del  bucle calcula la longitud de la cadena actual
        const longitudActual = listas[i].length;
        //se comparan y se queda la mínima
        if (longitudActual < longitudMinima) {
            longitudMinima = longitudActual;
        }
    }

    return longitudMinima;
}

// casos de prueba
const casosPrueba = [
    ["hola", "mundo", "javascript", "es", "divertido"],
    ["uno", "dos", "tres", "cuatro"],
    ["manzana", "kiwi", "platano", "naranja", "aguacate"]
];

// Ejecución de casos de prueba
casosPrueba.forEach((listaCadenas, index) => {
    console.log("lista:", listaCadenas);
    console.log("Longitud de la cadena más corta:", longitudMasCorta(listaCadenas));
    console.log("----------------------");
});
