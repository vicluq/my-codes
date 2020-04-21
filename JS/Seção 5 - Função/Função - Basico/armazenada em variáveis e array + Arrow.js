/* Pode-se armazenar funções numa constante - não pode alterar seu bloco mais. Em declarações normais, pode declarar a mesma várias vezes e alterando-a
 * Armazenando numa variável const, ela (seu escopo) não poderia ser mudada e não haveria varias execuções com o valor mais recente (hoisting) */

const areaRetangulo = function (comp, larg) { //funcão ela é um tipo, e variáveis possuem tipos, então variáveis podem possuir o tipo função

    return comp*larg;}

console.log(areaRetangulo(20, 3.6));

//Funções armazenadas em arrays

const array1 = [4, 5, function somar (x, y){return x + y}]
console.log(array1[2](4, 5)) //voce escolhe onde ta a funçao no aray e em seguida passa os parâmetros



//Arrow function: forma REDUZIDA de escrever uma funçao, trocando o 'function' por '=>' [APENAS O BÁSICO DO BÁSICO]

const soma = (a, b = 0) => {
    return a+b;
}
console.log(soma(3, 6));


        //retorno implícito: quando só há o return na função e mais nada (uma linha de código), pode tirar as chaves e o 'return'

        const soma2 = (x, y = 0) => x+y;
        console.log(soma(3));

        const divisao = w => w/10; //com apenas um parâmetro eu posso encurtar ainsa mais
        console.log(divisao(25));

        //As funções podem procurar variáveis usadass nelas mas não definidas nelas em escopos mais externos e abrangentes