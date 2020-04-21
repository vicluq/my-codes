//Retorna uma array novo do mesmo tamanho que o original(NÃO ALTERA ELE), porém com valores mudado de acordo com o que o usuário colocou na callback
// Map passa para a callback como parâmetro o mesmo que o forEach --> valor, índice, arrayOriginal

let array = [3,7,8,2]

let array2 = array.forEach(valor => valor*2) //isso não poderia fazer com a forEach pois ela apenas corre o array e não retorna um novo
                                            // então se eu por para a callback retornar algo, não vai para canto nenhum, pois o forEach não pede retorno!!
//Usando a Map                                           
array2 = array.map((valor, índice, arr) => valor*2) //a map, ao contrário da forEach retorna um novo array com as operações realizadas em cada elemento, 
console.log(array2)                  //pois ela corre o array e executa em cada elem a callback

//Na map se vc não por retorno NA CALLBACK ela da undefined pois ela retorna um novo array com modificações, então ela precisa receber os valores por retorno DAS CALLBACKS
//CALLBACK RETORNA PARA A MAP O VALOR E A MAP RETORNA UM ARRAY RESULTANTE COM OS RETORNOS DE CADA CALLBACK POR ELEMENTO!!

//MAP ENCADEADO: Eu posso usar vários maps seguidos do outro e o seguinte pega o array que o anterior retorno e executa a callback nelem=, até chegar no ultimo map que retornao= o
//array resultante de todos os maps!!

const produtos = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.2 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//retornar apenas um array com os preços!!

const toObject = (valor) => JSON.parse(valor) //cob=nverte cada elemento em objeto
const getPreco = (valor) => valor.preco //pega apenas o atributo preço

const preços = produtos.map(toObject).map(getPreco) //map passrá como parâmatro o valor, o indice e o array (usaremos só o valor) e no fim de todas as maps ela fornece o array resultante 
//preços recebeu o resultante do primeiro map, que será utilizado pela map seguinte e assim vai

console.log(preços)


Array.prototype.map2 = function (func) {

    let arrReturned = []
    for (let i = 0; i < this.length; ++i) {
        arrReturned[i] = func(this[i], i, this) //por isso que a call back deve retornar!! Na for each só havia a chamada da função e a forEach não retornava nada no fim
    }

    return arrReturned
} 

console.log(array.map2(valor => valor*2))


const array5 = [1, 3, 5]
const obj = {nome: 'victoria'}
console.log(array5.toString())
console.log(obj.toString())