//Ela se assemelha a uma laço do tipo 'for ... in ...', pois ela é executada para cada elemento do array com o objetivo de reduzi-lo em um unico valor(soo=ma dos elem por exemplo)
//Assim, a reduce fornece um valor final (acumulador) após executar a callback com cada elemento do array

/* array.reduce(function (acumulador, elementoAtual, indexAtual, arrayOriginal), valorInicial) 

        A callback recebe 4 parâmetros:
            - Acumulador: valor que será incrementado, alterado a cada callback (qntd = qntd elementos do array) pois ele é o retorno de uma call pra outra até a ultima, sendo retornado como resultado final após tudo--> definindo um valor inicial, o acumulador começa com esse valor
            - elementoAtual: isso quem fornece é o array, no caso, é o elemento atual que está sendo executado do array
            - indexAtual: index do elemento atual --> se eu começar de um index x, ele ignora os outros alementos de antes
            - arrayoriginal: array que está sendo executado o reduce (não é necessário, apenas se eu quiser exibir isso)

            por fim, eu devo retornar o valor do acumulador SEMPRE apos executar uma operação ou whatever com o elementoAtual

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

const totalDespesas = despesa.reduce(function(totalDespesas, valor) { return totalDespesas += valor}) //a callback deve retornar o valor do acumulador ('total'), pois se´ra passado e acumulado para a próxima
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

    1 elemento percorrido: total = 0, valor[0] = 32,50
    2 elemento percorrido: total = 32.50, valor[1] = 1060
    3 elemento percorrido: total = 1092.5, valor[2] = 215.60
    4 elemento percorrido: total = 1308,1, valor[3] = 1540
    5 elemento percorrido: total = 2848,1, valor[4] = 3699 ..... por ai vai até o ultimo elemento , retornando o total final

*/