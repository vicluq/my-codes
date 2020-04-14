//sempre vai comparar os valores/tipos e retornar 'true' ou 'false'

function compareValue_and_Type (x, y) {

    return ((x == y) && (typeof x == typeof y)) //se eu usar '===' ele compara o tipo
}
//typeof x == typeof y --> x === y

function compareType (x, y) {

    return typeof x == typeof y

}

function compareValue (x, y) {

    return x == y
}

console.log(compareValue_and_Type(2, '2'))
console.log(compareType(3, 4))
console.log(compareValue(2, '2'))


//Pré e pós incremento e decremento

const x = 1
const y = 2

++x //pré incremento -- > tem prioridade, ocorre antes do pós decremento (x++)

console.log(++x == y--) //seria true pois -> x iria ter logo um add (pré tem prioridade), depois seria feita a comparação e só depois y diminuiria (na ordem a diminuição eh depois da comparação --> pós decremento)
//deve se ater a isso nos ciclos for e while --> ele compara o valor após somar se for pré e depois se for pós (pré é o seguro)



//DATE
let year = 2020
let month = 4
let day = 4

const data1 = new Date(year, month, day) //instanciei essa função Date e forneci os parâmetros e ela tem dentro dela essas abaixo 


console.log(`0${data1.getDate()}/0${data1.getMonth()}/${data1.getFullYear()}`)
console.log(data1.getTime()) //tempo decorrido desde 01/jan/1970
console.log(Date(2020, 4, 4))
