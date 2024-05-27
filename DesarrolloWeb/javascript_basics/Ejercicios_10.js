//fucnion que recibe la cadena de entrada para saber si es palindromo o no
    function palindromo(cadena) {
          //se modifica la entrada para que pueda ser evaluada correctamete
        const cadenaModificada = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
          // se comparan las cadenas para saber si el palindromo o no
        const esPalindromo = cadenaModificada === cadenaModificada.split('').reverse().join('');
        //regresa el output con el formato pedido
        return esPalindromo ? `La cadena ${cadena} es palíndromo`: `La cadena ${cadena} NO es palíndromo`;
    }
    
    //se imprimen los casos de uso
    console.log(palindromo('anita lava la tina'));
    console.log(palindromo('revolver')); 
    console.log(palindromo('1001')); 
    
