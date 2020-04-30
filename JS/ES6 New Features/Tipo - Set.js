//TODO: Set é um estrutura semelhante aos objetos, porém sem keys. Apenas conjuntos de valores SEM REPETIÇÃO DESSES!

const set1 = new Set(['Victoria', 'Caio', 'Alex']) //Tenho que por entre colchetes

console.log(set1) // {nome1, nome2, nome3}

set1.add('Julia')
set1.delete('Alex')
console.log(set1.size)



//! Desafio: Set para eliminar os elementos rep de um array!

const arr = [1, 6, 8, 3, 9, 2, 3, 9, 1, 8]

const noReps = new Set (arr) //Criando um set para eliminar elem repetidos de um array!

console.log(noReps)

const arr2 = new Array(...noReps) //*REST me fornece os valores desse sets

console.log('arr2 :>> ', arr2);
