//funcion que recibe la lista de numero para calcular la oda y la mediana
function modaYmediana(listaNumeros) {
    // ordena la lista
    const listaOrdenada = listaNumeros.sort((a, b) => a - b);

    // alcular la longitud de la lista 
    const n = listaOrdenada.length;
    //se declara la varibale mediana
    let mediana;

    //se comprueba que se par la longitud de la lista
    if (n % 2 === 0) {
        //se calcula el indice medio
        const indiceMedio = n / 2;
        mediana = (listaOrdenada[indiceMedio - 1] + listaOrdenada[indiceMedio]) / 2;
    } 
    //si es impar se ejecuta el else
    else {
        mediana = listaOrdenada[Math.floor(n / 2)];
    }

    // Calcular la moda
    const frecuencias = {};
    listaOrdenada.forEach(num => {
        frecuencias[num] = (frecuencias[num] || 0) + 1;
    });

    //se usa Math.max para encontrar la frecuencia
    const maxFrecuencia = Math.max(...Object.values(frecuencias));
    const moda = Object.keys(frecuencias).filter(num => frecuencias[num] === maxFrecuencia);

    return { mediana, moda, listaNumeros: listaOrdenada };
}

//array con las listas de los casos de prubas
const casosPrueba = [
    [1, 2, 3, 4, 4, 5, 5, 5, 6],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [1, 1, 1, 2, 2, 2, 3, 3, 3, 4]
];

// se imrpimen los casos de prueba
casosPrueba.forEach((nums) => {
    const { mediana, moda, listaNumeros } = modaYmediana(nums);
    console.log(`Lista: ${listaNumeros}`);
    console.log(`Mediana: ${mediana}`);
    console.log(`Moda: ${moda}`);
    console.log("----------------------");
});
