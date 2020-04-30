//* Representado por três pontos (...). Ele representa pegar todo o conteúdo de um array ou objeto

//TODO Com Arrays
const arr1 = [1, 6, 9, 4, 8, 2];
const arr2 = [1, 9, 0, 14, 38, 70];

const resultant = [...arr1, ...arr2] //? significa que estou pegando todo o arr1 e todo o arr2 e juntando em um só: 'resultant'
                    // pega o 'rest' do array todo!
console.log(resultant)

//* Misturando o com Destructuring --> lembrando que o destruct não muda o array/objeto original, apenas extrai!

const [x, ...y] = arr1 //! x pega o primeiro elemento e y todo o rest

console.log(x, y)

const [, x2, ...y2] = arr2 //! x2 vai pegar o arr2[1] e y2 vai pegar o resto depois. arr2[0] ficou de fora

console.log(x2, y2)


//TODO ; Com Objetos também funciona: Em destruct ele pega o resto, em junção ele espalha os elem de um obj em outro

const obj1 = {
    name: 'victoria',
    idade: 18
}

const obj2 = {
    logradouro: 'Rua Estrela',
    num: 203
}

//* Juntando dois objetos ('concatenando')

const pessoa = {...obj1, ...obj2}

console.log(pessoa)

//* Destructure --> lembrando que, em um objeto, para desestruturar, tem que usar o mesmo nome do atributo. 

const {idade, ...info} = //?pessoa extraio idade e armazeno o resto em info --> isei um variável nova pq quero dizer que o resto (...) ficará nela!

//console.log(info, idade)


//TODO Com Funções: útil pra quando eu não sei quantos parâmetros passar. Ele agrupa todos os param recebidos em um array. (não precisaria se preocupar com arr.length)

const reduce = (...values) => { 

    let sum;
    const sum = values.reduce((acum, value) => { //acum é o valor retornado da callback anterior
        return acum + value
    }, 0)

    return sum;

}


console.log(reduce(1, 5, 8, 9), reduce(90, 6, 8, 2, 6))