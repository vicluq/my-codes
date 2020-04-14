let peso1 = 56;
let peso2 = Number(63.65); // essa função converte valores na forma de string em numeros
let TorF = Number.isInteger(peso2);
//essa função retorna T ou F (tipo dela é função boolean) caso seja ou não inteiro(eu poderia ter posto direto no log, mas quis testar)
//console.log(typeof Number.isInteger()); 

console.log(peso1, peso2);


console.log(peso1 + peso2); //Se tratar peso2 como string, ele apenas concatena peso1 com peso2 (5663.6), mas se eu tratar como Number, ele soma
                            //Mas se for divisão de peso2 string de um valor com peso1 número, ele divide normal
console.log("Is peso1 an integer?", Number.isInteger(peso1));

console.log('Is peso2 an Integer?', TorF);

let media = (peso1 + peso2)/2

console.log("A média dos pesos é:",media.toFixed(2)); //Essa função 'toFixed(num casas decimais q vc quer)' muda a visualização d qntd de casas

// console.log(media.toString()) converte média em string nessa linha, apenas, e printa. Se eu pôr '(2)' ele transforma o num em binário

// Divisão por 0 é igual a 'infinito'


