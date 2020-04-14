console.log(!!(true^true)) //--> xor retorna 0 ou 1 em operações com booleanos por 0 = false e 1 = true então na operação(subtração) por bits da 0 ou 1
                            //Para transformar em booleano basta por a dupla negação pois a seg anula a primeira e retora o valor orignal

//&& ('e'): ambos devem ser V para ser V
// || ('ou inclusivo'): basta um ser V
// ^ (xor): subtração bit a bit retornando um inteiro. Usa !! para transformar em booleano--> útil com booleanos (exemplo acima) pois apenas um pode ser true prara ser true
//OPERADOR TERNÁRIO: é a "? 'valorVerdade':'valorFalso' " -> faz uma 'pergunta' e se for vdd executa o da esquerda e se for falso, o da direita

//Se o money na conta for maior que 250 e o trabalho for concluído = comprar roupa e almoçar no madero
//se o money > 250 mas o trabalho não for concluído, almoçar no madero
//Se nenhum dos dois forem vdd, fica em casa

function checarOqFazer (money, trabalhoFeito) {
    if (money>250 && trabalhoFeito == true) {
        return `Você tem R$${money} e vai almoçar no madeiro e comprar roupas`}
    
    else if((money>250 && trabalhoFeito == false) || (money<250 && trabalhoFeito == true)) 
    {return `Você tem R$${money} e vai almoçar no madeiro, mas não vai comprar roupas`}
    
    else if(money<250 && trabalhoFeito == false) 
    {return 'Você vai ficar em casa para trabalhar e ganhar o money'}
}

console.log(checarOqFazer(220, true))
console.log(checarOqFazer(315, true))
console.log(checarOqFazer(355, false))
console.log(checarOqFazer(135, false))





