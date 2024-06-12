//funcion que recibe de netrada un numero para saber si potencia de dos
function esPotenciaDeDos(num) {
    //verifica que el numero sea postivo
    //utiliza la operación & para verificar si es una potencia de dos. Si el resultado es cero, el número es una potencia de dos.
    return num > 0 && (num & (num - 1)) === 0;
}

// casos de prueba
const casosPrueba = [16, 10, 8];

// se ejecutan de casos de prueba
casosPrueba.forEach((num) => {
    console.log("Número:", num);
    console.log("potencia de dos?", esPotenciaDeDos(num));
    console.log("----------------------");
});
