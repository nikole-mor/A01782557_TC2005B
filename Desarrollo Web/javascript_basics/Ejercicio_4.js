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

// Ejemplo de uso:
const textoOriginal = 'hola mundo feliz';
const textoCapitalizado = primerLetraMayus(textoOriginal);
console.log("Texto original:", textoOriginal);
console.log("Texto capitalizado:", textoCapitalizado);
