//toma una lista de cadea como entrada
function masFrecuente(listaCadenas) {
    //contador se declara vacio porque ahi se va a almacenar las veces que se repita una cadena dentro de la lista
    const contador = {};
    //bucle que recorre cada cadena de la lista
    for (const cadena of listaCadenas) {
        //se verifica que este en el contador en caso de que si este se incremeta uno al contador 
        if (cadena in contador) {
            contador[cadena] += 1;
        //en caso de que no este se ejecuta el else que es simplemete quedarse en 1 el copntador
        } else {
            contador[cadena] = 1;
        }
    }

    // Encuentra la cadena con la frecuencia máxima
    let maxFrecuencia = 0;
    let cadenaFrecuente = null;
    //bucle for para recorrer cada elemento (cadena y su frecuencia) en contador.
    for (const cadena in contador) {
        if (contador[cadena] > maxFrecuencia) {
            maxFrecuencia = contador[cadena];
            cadenaFrecuente = cadena;
        }
    }

    return cadenaFrecuente;
}

// array de casos de prueba
const casosPrueba = [
    ["manzana", "banana", "manzana", "pera", "manzana"],
    ["hola", "hola", "mundo", "mundo", "mundo"],
    ["azul", "rojo", "azul", "rojo", "rojo"]
];

// se ejecutan los casos de prueba
casosPrueba.forEach((listaCadenas) => {
    const cadenaFrecuente = masFrecuente(listaCadenas);
    console.log("Lista:", listaCadenas);
    console.log("Más frecuente:", cadenaFrecuente);
    console.log("----------------------");
});
