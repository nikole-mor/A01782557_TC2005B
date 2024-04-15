//funcion que toma una arreglo de numeros como entrada
function invertirArreglo(arr) {
    // arr.slice nos sirve para crear una copia del arreglo
    const copiaArreglo = arr.slice();
    // se invierte la copia utilizando un bucle
    const arregloInvertido = [];
    for (let i = copiaArreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(copiaArreglo[i]);
    }
    return arregloInvertido;
}

// Ejemplo de uso:
const numerosOriginales = [1, 2, 3, 4, 5];
const numerosInvertidos = invertirArreglo(numerosOriginales);
console.log("Arreglo principal:", numerosOriginales);
console.log("Arreglo invertido:", numerosInvertidos);


// tiene numerosOriginales como argumento, y se almacena el resultado en numerosInvertidos.
function invertirArregloNuevo(arr) {
    // se intercambia los elementos desde los extremos hacia el centro
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

// Ejemplo de uso:
const numerosParaModificar = [6, 7, 8, 9, 10];
invertirArregloNuevo(numerosParaModificar);
console.log("Arreglo modificado:", numerosParaModificar);
