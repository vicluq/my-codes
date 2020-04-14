// Var: como ela é acessível em blocos diferentes (com exceção de função) você pode imprimir o valor de var após o ciclo

for (var x = 0; x < 7; ++x) {
    console.log(x); //var x pertence ao bloco for, mas pode ser acessado no global ou em outro

}

console.log('fora do ciclo = ', x); //x = valor q faz o ciclo parar


//Let:  como ela não é acessível em blocos diferentes, você não pode imprimir o valor de let após o ciclo, pois ela pertence ao bloco do for

for (let y = 0; y < 7; ++y) {
    console.log(y);
}

// não pode: console.log('fora do ciclo = ', y) 

        // Alternativa:

        let w = 0 //funciona pois estou declarando na global e usando num bloco mais interno e isso pode
        for ( ; w < 7; ++w) {console.log(w);}
        console.log('fora do ciclo = ', w);

//test

const array = [];

for (var x = 0; x<10 ; ++x) {
    array.push(x);
}

console.log(array);

/**********************************/
const array2 = [];

for (let y = 0; y<10 ; ++y) {
    array2.push(y);
}

console.log(array2);