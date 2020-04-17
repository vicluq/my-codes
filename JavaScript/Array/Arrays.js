// Arrays (objetos) em JS são semelhantes às lista em python: não precisa indicar a quantidade de elementos; pode por qualquer tipo de elemento
// Para acessar um elemento específico do array basta usar [índice do elemento] & pode imprimir o array inteiro  tbm
// O IDEAL É TER UM ARRAY HOMOGÊNEO COM SÓ UM TIPO DE ELEMENTO

let dadosVictoria = ['vicluq', 'Victoria', 18, 12345]; // [usuário, nome, idade, senha]

/* let dadosVictoria = [
'vicluq', 
'Victoria', 
18, 
12345]; // [usuário, nome, idade, senha]
*/

console.log(dadosVictoria);
console.log(dadosVictoria[0]);

// Eu posso adcionar mais elementos ao array inddicando onde quero armazenar, mesmo que gere espaços vazios antes e o JS avisa

dadosVictoria[5] = "29-11-2001";
console.log(dadosVictoria);
console.log(!!dadosVictoria[4]); // esse elemento é vazio (false), pois qnd add mais um elemento no índice 5, ele gerou um vazio no 4

// '.length' diz a quantidade de elementos do array e tbm serve para strings

console.log(dadosVictoria.length);
console.log("dadosVictoria".length);

//Função array'.push(elementos)' permite ADICIONAR ELEMENTOS NO ARRAY: push elements into 'array'

dadosVictoria.push("123.706.498-04", 23479572941410); //cpf, numeroCartão
console.log(dadosVictoria);

//Função '.pop()' e 'delete' --> RETIRAR VALOR DO ARRAY: a POP TIRA O ÚLTIMO SÓ e a delete você pode escolher o índice do elemento que quer tirar

dadosVictoria.pop(); //tirou numeroCartão
delete dadosVictoria [6]; //tirou CPF e deixou um item vazio
//DELETE SRVE PARA QUALQUER COISA QUE ARMAZENE ELEMENTOS (OBJETOS)
console.log(dadosVictoria);

//slice() --> recebe dois argumentos índices (onde começo, onde termino). Ela retorna um array que possui apenas os elementos do índice 'início' até 'fim -1'

const array5 = [5, 8, 23, 'ola'];

console.log(array5.slice(0, 3)) //lembrar que é intervalo aberto no ultimo!!

console.log(typeof array5) //arrays literais são objetos, mas que trabalham com os valores de forma indexada!