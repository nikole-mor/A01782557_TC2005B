//se crea la función que tiene el argumento de entrada el numero que se factoriza
function factoriza(numero) {
    //se crea esta varibale vacia ya que más adelante se van a guardaar ahí los factores del numero
    const factores = [];
    //bucle que recorre cada los numero hasta que llega al numero que se ingresó
    for (let i = 1; i <= numero; i++) {
        //se verifica que se divisible entre i
        if (numero % i === 0) {
            //en casi de que sea divisble se agrega a la lista 
            factores.push(i);
        }
    }
    return factores;
}

// casos prueba
const casosPrueba = [12, 20, 36];

// Se ejecuta la función para cada caso de prueba y se imprime el resultado
casosPrueba.forEach(numero => {
    console.log("Factoriza", numero, ":", factoriza(numero));
});
