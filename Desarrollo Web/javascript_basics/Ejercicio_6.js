function hackerSpeak(cadena) {
    // array con el equivalente de numeros a cada letra
    const letra_num = [
        ['a', '4'],
        ['e', '3'],
        ['i', '1'],
        ['o', '0'],
        ['s', '5']
    ];

    // se conveirte la cadena a hacker speaj
    let hackerText = cadena; //si inicia la variable con la cadena de entrada
    letra_num.forEach(letra_num => {
        //se crea una reges para buscar similitudes
        const regex = new RegExp(letra_num[0], 'gi'); //gi significa es busqueda global
        hackerText = hackerText.replace(regex, letra_num[1]); //remplanza las ocurrencias 
    });

    return hackerText;
}

// lista con casos de prueba
const casosPrueba = [
    'Javascript es divertido','Hola mundo','Programando en javascript'
];

// se ejecutan las pruebas
casosPrueba.forEach((cadena, index) => {
    const resultado = hackerSpeak(cadena);
    console.log(`prueba ${index + 1}:`);
    console.log("input:", cadena);
    console.log("hacker speak:", resultado);
    console.log("----------------------");
});
