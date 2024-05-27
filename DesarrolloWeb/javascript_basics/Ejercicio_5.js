//se declara la funcion que toma como argumeentos los dos números para calcular mcd
const maximoComunDivisor = (a, b) => {
    let temp; //se utiliza esta varibale para intercabiar valores mientras se calcula el mcd
    //bucle while que se ejecutará mientras b no sea igual a cero. 
    while (b !== 0) {
        temp = b; //se guarda el valor de b en esta varibale
        b = a % b; //se actualiza el valor de b al residuo de la división de a entre b.
        a = temp; //se actualiza el valor de a al valor previo de b.
    }
    return a;
};

// array con los 3 casos de prueba
const casosPrueba = [
    { a: 50, b: 120 },
    { a: 36, b: 48 },
    { a: 81, b: 153 }
];

// Ejecución de casos de prueba
casosPrueba.forEach((caso, index) => {
    //llama a la funcion principal con los argumetos de entrada a y b
    const resultado = maximoComunDivisor(caso.a, caso.b);
    console.log(`Prueba ${index + 1}:`); //para poner el numero de prueba que es
    console.log("Números", caso.a, caso.b);
    console.log("Maximo común divisor:", resultado); //imprime el resultado
    console.log("----------------------");
});
