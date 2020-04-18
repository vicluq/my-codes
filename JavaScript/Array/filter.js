//SE BASEIA EM VALORES BOOLEANOS PARA CRIAR O SUBARRAY A PARTIR DO ORIGINAL, SEM ALTERÁ-LO

const alunos = [
    
    {nome: 'Victoria', media: 9.2},
    {nome: 'Victor', media: 8.4},
    {nome: 'Julia', media: 6.4},
    {nome: 'Tiago', media: 7.2},
    {nome: 'Carlos', media: 9.4},
    {nome: 'Ana', media: 5.7}
]

//se o retorno da callback for true para o elemento, a filter põe ele no novo array!!
const aprovados = alunos.filter(aluno => aluno.media >= 7).map(aluno => aluno.nome ) //pegar apenas o array com os nomes por isso useii o map!
const reprovados = alunos.filter(aluno => aluno.media < 7).map(aluno => aluno.nome )

console.log(`Aprovados: ${aprovados} 
Reprovados: ${reprovados}`) //o template string não mostra como se fosse um array, mas sim, em forma de string!

console.log("Aprovados: ", aprovados) //como não é template string, ele mostra como array mesmo!!
console.log("Reprovados: ", reprovados)


Array.prototype.filter2 = function (func) { //this é o array que chamará essa função que está no prototype da função Array

    const newArr = []
    for (let i = 0; i < this.length; ++i) {

        if (func(this[i], i, this) === true) {newArr.push(this[i])} //utilizo o método push pois ele vai adicionando à ultima posição sem deixar empty
    }


    return newArr
}

const array2 = [2, 5, 7, 3, 8]

console.log(array2.filter2(valor => valor > 4))