//se crea la función
function Burbuja() {
    //contsnate que tiene la lista de numeros desordenados
    //casos de prueba
    //const lista = [1, 0, 4, 12, 3, 6, 11];
    //const lista = [23, 1, 32, 563, 8, 714, 5];
    const lista = [389, 703, 247, 563, 224, 714, 464];
    //almacena la longitud de la lista
    const n = lista.length;
    //se imprime la lista original
    console.log("Lista original:", lista); 
    // Algoritmo de bubblesort. Itera a través de los elementos de la lista
    for (let k = 1; k < n; k++) {
        for (let i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                // intercambia elementos si están en el orden incorrecto
                let aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log("Lista ordenada:", lista); // Mostramos, por consola, la lista ya ordenada
}
// Casos de prueba
console.log("Caso de prueba 1:");
Burbuja();