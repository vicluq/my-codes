//Ela se assemelha a uma laço do tipo 'for ... in ...', pois ela é executada para cada elemento do array com o objetivo de reduzi-lo em um unico valor(soo=ma dos elem por exemplo)
//Assim, a reduce fornece um valor final (acumulador) após executar a callback com cada elemento do array

/* array.reduce(function (acumulador, elementoAtual, indexAtual, arrayOriginal), valorInicial) 

        A callback recebe 4 parâmetros:
            - Acumulador: valor retornado da callback anterior!!
            - elementoAtual: isso quem fornece é o array, no caso, é o elemento atual que está sendo executado do array
            - indexAtual: index do elemento atual --> se eu começar de um index x, ele ignora os outros alementos de antes
            - arrayoriginal: array que está sendo executado o reduce (não é necessário, apenas se eu quiser exibir isso)

            por fim, eu devo retornar o valor do acumulador SEMPRE apos executar uma operação ou whatever com o elementoAtual
            OBS: O VALOR INICIAL DO ACUMULADOR É ARR[0] e começa a partir do [1], SE EU COLOCAR UM VALOR INICIAL AI FICA ESSE E COMEÇA A PARTIR DO índice 0!!
            eu posso por o valor inicial para 0 e a reduce começará do índice 0!!

*/


//Exemplo: calcular quanto deve no mês:

const transações = [

    {nome: 'Salário', valor: 11560, despesa: false},
    {nome: 'Cinema', valor: 32.50, despesa: true},
    {nome: 'Manuntenção Carro', valor: 1060, despesa: true},
    {nome: 'Restaurante', valor: 215.60, despesa: true},
    {nome: 'Escola Filho', valor: 1540, despesa: true},
    {nome: 'Celuar', valor: 3699, despesa: true},
    {nome: 'Luz', valor: 225.17, despesa: true},
    {nome: 'água', valor: 123.5, despesa: true},

]

const despesa = transações.filter(transação => transação.despesa).map(transação => transação.valor)

const totalDespesas = despesa.reduce(function(totalDespesas, valor) {return totalDespesas += valor}) //a callback deve retornar o valor do acumulador ('total'), pois se´ra passado e acumulado para a próxima
// por fima, a reduce retorna o valor final do acumulador ('total')

const ganhos = transações.filter(transação => !transação.despesa).map(transação => transação.valor)

const totalGanhos = ganhos.reduce((totalGanhos, valor) => totalGanhos += valor)

const saldoFinal = totalGanhos - totalDespesas

console.log('Array Despesas:', despesa,'\n')
console.log('Total despesa:', totalDespesas,'\n')
console.log('Array Ganhos:', ganhos,'\n')
console.log('Total ganhos:', totalGanhos,'\n')
console.log(saldoFinal)

/*por dentro do reduce nesse caso 

    [1]: total = 32.50, valor[1] = 1060 //acumulador começa com o valor de primeiro elemento
    [2]: total = 1092.5, valor[2] = 215.60
    [3]: total = 1308,1, valor[3] = 1540
    [4]: total = 2848,1, valor[4] = 3699 ..... por ai vai até o ultimo elemento , retornando o total final

*/


const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]


//DESAFIOOOOOOOOOO
//1. reduce para saber se todos são bolsistas --> false = -1 e true = 1 então se no fim o acumulador for igual ao length do array, então é vdd

function saoTodosBolsist (arr) {

    const todosBolsistas = arr.reduce(function (bool, aluno) {
        return bool = bool + aluno.bolsista
    })

    if(todosBolsistas == arr.length) {
        return true
    }
    else {return false}
}

console.log(saoTodosBolsist(alunos)) 

//2. saber se pelo menos um é --> se nenhum for (false) o valor do acumuladorvai ser -array.length pois false = -1

function peloMenosUmBolsista (arr) {

    const peloMenosUm = arr.reduce(function (bool, aluno) {
        return bool = bool + aluno.bolsista
    })

    if(peloMenosUm == ((-1)*arr.length)) {
        return false
    }
    else {return true}
}

console.log(peloMenosUmBolsista(alunos))

//SIMULANDO REDUCE!!

Array.prototype.reduce2 = function (func, valorIn) {

    if (!valorIn) {
    let total = this[0];
    for (let i = 1; i < this.length; ++i) {
        total = func(total, this[i], i, this)
    }
    return total; }

    else {
        let total = valorIn;
        for (let i = 0; i < this.length; ++i) {
            total = func(total, this[i], i, this)
        }
        return total; 
    }

}

const totalDespesas2 = despesa.reduce(function (total, valor) {return total += valor})
console.log(totalDespesas)