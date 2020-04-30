//arr.sort() --> colocará o array em ordem e MUDA O ORIGINAL

let arr = [4, 8, 1, 3, 0, 9];
arr.sort() //retorna o array sorted e substitui
console.log(arr)


/** arr.splice(indiceOndeComeço, qntsExcluirApartirDoElemDeInicio, ...elem a adicionar) **/
//OBS: se eu quiser só add, basta por 0 no segundo param!!
//OBS2: se eu começar a partir de um indice, os elem add serão nesse índice e os que ja estavam andam para trás

let nomes = ['vic', 'fred', 'julia'];
nomes.sort() //vou ordenar e depois add com o splice na ordem alfabética
// [fred, julia, vic]
nomes.splice(2, 0, 'Luan', 'Luisa') //comece do índice 2 (vic), e adicone 2 no lugar e bota vic pra trás
console.log(nomes) //o indice inicial, é o que vai ter coisa colocada no lugar e é o primeiro a ser excluído caso queira excluir elementos


/*** arr.shift() --> remove um elemento do índice 0 **/
/*** arr.unshift('') --> adicona um elemento no índice 0 **/
let nomes2 = ['vic', 'fred', 'julia'];
arr.unshift('lucas')
console.log(nomes2) //como o elemento já existe no 0, eu não posso add. Tem que ser usado com o shift()


