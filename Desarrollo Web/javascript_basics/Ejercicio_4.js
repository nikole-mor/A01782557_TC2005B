function primerLetraMayus(cadena) {
    // se divide la cadena en partes 
    const palabras = cadena.split(' ');

    // se pone en mayuscula la primera letra de cada palabra
    const palabrasCambiadas = palabras.map((palabra) => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });

    // se juntan para formar una nueva cadena
    const resultado = palabrasCambiadas.join(' ');

    return resultado;
}

// array con los casos de prueba
const casosPrueba = [
    { input:'como estas'},
    { input:'hola mundo'},
    { input:'programancdo con javascript' }
];

// se itera sobre cada caso de prueba para comparar los resultados
casosPrueba.forEach((caso, index) => {
    const resultado = primerLetraMayus(caso.input);
    console.log(`Caso de prueba ${index + 1}:`);
    console.log("Input:", caso.input);
    console.log("Outout final: ", resultado);
    console.log("----------------------");
});
