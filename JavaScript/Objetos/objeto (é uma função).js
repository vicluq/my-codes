// Objetos em JS são semelhantes às structs em C -> delimitado por chaves. Objetos são coleçoes de pares 'identificador: valor'
// é dinâmico, pois você pode alterar ou tirar elementos do objeto
// diferente de json --> json é um formato textual

const iPhone = {}; //representa um produto ou um usuário ou algo real e cada um desses são representados e possuem elementos
//nesse exemplo o objeto repesenta um iphone e os elementos fornecem dados sobre ele

iPhone.nome = "iPhone X" //cada elemento do objeto tem uma nomeação e o "valor" (string, numero, outro objeto)
iPhone.ID = 134138
iPhone.preço = 3399
iPhone.cameraTraseira = "13 mega pixels"
iPhone.cameraFrontal = "9 mega pixels"


console.log(iPhone)


// outra forma de atribuir elementos (que tbm são objetos) aos objetos
const Galaxy = {

    nome: 'S10',
    ID: 2143592,
    preço: 2600,
    camera: { //posso por objetos dentro de objetos para representar um outro conjunto de elementos que fazer parte do conjunto objeto
        cameraTraseira: '16mp',
        cameraFrontal: '8mp'
    }

}

//OBSERVAÇÃO: const objeto = {}, eu posso alterar os atributos (elementos ident:valor) do objeto, mas não posso trocar a variável para outro tipo
//não poderia trocar de objeto pra número, string, etc. const obj = {} não poderia fazer isso: obj = 2 pq eh numero

//OBS: se eu criar constantes e colocar seu nome no objeto pra ela fazerem parte dele, não precisa por o indentificador com dois pontos, pois o JS cria automaticam

const nome = 'iPhone X';
const valorx = 3000;

const obj = {nome, valorx}
/*
    nome: iPhone X
    valorx: 3000

*/

console.log(obj)

//POSSO TER UM ARRAY DE OBJETOS:

let iphones = [{nome: 'iPhonex', preco: 3450, cor: 'Branco', camera: {frontal: '16mp', traseira: '8mp'}}, {nome: 'iPhone 11  Pro', preco: 4997, cor: 'Branco'}]

//DELETANDO ELEMENTOS:
delete iphones[0].camera.traseira

console.log(iphones[0])

//ADICIONANDO MÉTODOS - FUNÇÕES AOS OBJETOS:

const pessoa1 = {
    nome: "Victoria Luquet",
    função1: function () {console.log("Olá" + this.nome)} //Como é umafunction normal, o this se refere ao objeto que é dono da função, a arrow refere-se ao método
}