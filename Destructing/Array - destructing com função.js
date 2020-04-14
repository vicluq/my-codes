function randomNumber([min=0, max=90]) { //min = array[0] e max = array[1]

if (min>max) {[min,max] = [max, min]} //[min, max] = [max, min] --> destructing: atribuindo o segundo array ao primeiro
                                      //troca de variável tbm funcionaria
return Math.floor(Math.random()*(max - min) + min);

}


const array = [30, 20] //como o mínimo é maior, precisa inverter esse array na função --> troca de variável ou inveter com destruct

console.log(randomNumber(array));
console.log(randomNumber([25, 90])); //posso passar um array direto
console.log(randomNumber([])); //como os dois elementos necessários são undefined nesse array, a função pega valores padrões
console.log(randomNumber()); //assim como se não passar objeto não roda, com array tbm n, pois precisa de um array para desestruturar!