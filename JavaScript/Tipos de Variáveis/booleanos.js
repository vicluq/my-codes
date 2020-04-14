// Usa-se a dupla negação como artificio para testar se algo é verdadeirro ou falso pois neg com neg anula e da o valor original sem a neg
// Uso do || com !! e sozinho
//SEMPRE QUE USAR !! ELE RETORNA OU VDD OU FALSO PQ EH UM OPERADOR BOOLEANO

//VERDADEIROS:

console.log(!!7);
console.log(!!-8);
console.log(!!Infinity);
console.log(!!' ') //string sem letras/num, mas tem o 'espaço'
console.log(!!(0 || 'x' || null)) //Verdadeiro, pois como esta usando o 'OU', basta um ser vdd para ser true

//FALSOS:

console.log(!!0); //ZERO É SEMPRE FALSO
console.log(!!null);
console.log(!!''); //string sem absolutamente nada, nem espaço
console.log(!!undefined);

//USANDO O '||' EM STRINGS (Diferente do if/else) --> Ele imprime o primeiro que for vwrdade, por isso bota o que tem prioridade antes

const nome = 'Vick';

console.log(nome || 'ninguém'); //Se a prioridade for analisar se o nome eh T ou F para depois exibir o outro, então se põe o que tem prioridade antes
console.log('ninguém' || nome); // Aqui eu dei prioridade ao outro
console.log(nome || 'ningm' || 'nobody'); //imprime o do meio antes pois a ordem de prioridade o colocou como mais importante com o 'nobody'

