//funcion que recibe una cadena coo argumento de entrada
function caracterNoRepetido(cadena) {
    //argumrnto vacio para ver cuanto se repite un caracter de la cadena
    let conteo = {};

    // Recorre cada caracter de la cadena y se actualiza conteo segun cuanto se repita cada carácter
    for (let c of cadena) {
        conteo[c] = (conteo[c] || 0) + 1; //incrementa el conteo
    }

    // recorre nuevamente cada carácter en la cadena, busca al primer carácter no repetido
    for (let c of cadena) {
        //verifica si el conteo es 1. Si es así, significa que es el primer carácter no repetido.
        if (conteo[c] === 1) {
            return c; //regresa el carcater no repetido
        }
    }

    // si no hay carácter no repetido imprime null
    return null;
}

// Ejemplo
let texto = 'abacddbec';
console.log("Primer carácter no repetido:", caracterNoRepetido(texto));

