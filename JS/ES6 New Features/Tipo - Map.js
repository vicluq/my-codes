//TODO: Map é um tipo de elemento semelhante aos objetos pois possuem coleções chave, valor - É UM ARRAY DE ENTRIES [[key, value]...]!
const mapping = new Map() //! Eu preciso instanciá-lo para criar pois é um obj porém com formato iterável(array). Como param passo as entries([key, value])


mapping.set('Nome', 'Victoria'); //? o método 'set' é usado para adicionar as entries (key, value)
console.log(mapping.get('Nome')) //? 'get' é o método usado para pegar o valor da chave, fornecendo o nome da chave

console.log(mapping) //* Map { 'Nome' => 'Victoria' } --> Nome returns 'Victoria'

//TODO: Criando direto da função Map() eu posso já passar os elementos que quero. Em forma de 'entries' --> Fica igual a quando pego as entries de um obj!

const newMap = new Map([['Nome', 'Victoria'], ['idade', 18], ['Universidade', 'UFPE'], ['Curso', 'Eng. Computação']]) //? como é um array posso iterar!
console.log(...newMap) //fornece os elementos desse array Map --> entries

/*
!Map {
!  'Nome' => 'Victoria',
!  'idade' => 18,
!  'Universidade' => 'UFPE',
!  'Curso' => 'Eng. Computação'
!}
*/

//* ForEach no map é diferento no Array. No map os params são (value, key)
newMap.forEach((value, key) => {
    console.log(key,':', value)
});

/*
* RESUMO DO OBJETO MAP:

! Oque é: uma coleção de chaves e valores
? Como Criar: instancia da função Map(array com entries)
? Add dinamicamente: map.set(key, valor)
! Acessando valores: map.get(key)
TODO: É iterável pois recebe arrays (obj iterável) com param--> forEach!! 
! deletando algo: map.delete(key)
! Limpando o Map: mp.clear()
! Pegando Tamanho: map.size
*/

//*OBS: Se eu quiser transformar um obj em um Map --> pego as entries desse objeto e passo de parâm para a função Map(entries) na instância!

const objeto = {
    Mat: 10,
    Hist: 8.9,
    Quím: 9.7,
    Fís: 9.2,
    Geo: 8.4,
    Port: 7.7
}
const objEnt = Object.entries(objeto) //! entries de um obj = conjunto chave valo só que iterável, ou seja, em forma de array!
console.log(objEnt)

const mapFromObj = new Map(objEnt)
console.log(mapFromObj)