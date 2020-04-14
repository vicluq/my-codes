//Geralmente usado para quantidades indeterminadas de vezes, ou seja, vc não sabe quantas vezes ele vai rodar, só sabe as condições!

function randomNumber (min = 0, max = 100) {

    let aux;
    if (min > max) {aux = min; min = max; max = aux}

    return Math.floor(Math.random() * (max - min) + min);

}

/*let num = 0;
let aux = 0;
let soma = 0;

while (num != 5) { //não sabemos quando ele vai parar de executar o ciclo, só sabemos que é quando o numero for 5!
    num = randomNumber();
    
    console.log(num);
    
    aux = num;
    soma += aux;
    console.log(`A soma é: ${soma}`);
} */

let num2 = 0; let aux2 = 0; let soma2 = 0;

while (soma2 < 3000) { //não sabemos quando ele vai parar de executar o ciclo, só sabemos que é quando o numero for 5!
    num2 = randomNumber();
    
    console.log(num2);
    
    aux2 = num2;
    soma2 += aux2;
    console.log(`A soma é: ${soma2}`);
}