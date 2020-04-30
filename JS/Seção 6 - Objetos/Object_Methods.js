///Funções de objetos


const objetoTeste = {
    nome: 'iphone x',
    preco: 4000,
    cor: 'branco',
    x: {
        y: 90,
        z: 80
    }
}

//1) Object.keys(); --> fornece um array com  todos os inentificadores que aquele objeto possui, ou seja, os dados que ele contém!!

console.log(Object.keys(objetoTeste))

//2) Object.values(); --> A mesma coisa da outra só que pega o valor dos atributos e não seus nomes
console.log(Object.values(objetoTeste))
let array2 = Object.values(objetoTeste)

console.log(array2[array2.length - 1].y)

//3) Object.entries(); --> ele cria um array que dentro desse array há x arrays (x = quantidade de atributos), em que cada subarray tem 2 elementos: [identificador, valor]

console.log(Object.entries(objetoTeste))

let arrayObj = []
arrayObj = Object.entries(objetoTeste)

//4) Object.freeze(); --> 'congela' o objeto, ou seja, não permite alteração nem adição de atributos


//5) Object.defineProperty(objsAlvo, 'nomeAtriburo', {objeto com as porpriedades desse atributo (se eh visivel, alterável)})

Object.defineProperty(objetoTeste, 'Id', {
    enumerable: true, //se fica visível ou não ao exibir o obj no console
    writable: false, // se posso alterar posteriormente
    value: 12403 //o valor do atributo --> pode ou não ser alterado depois dependendo da propriedade acima
})

console.log(objetoTeste)


Object.defineProperty(objetoTeste, 'cor', { //posso também alterar/definir propriedades de atributos existentes
    enumerable: true,
    writable: false, 
 
})


objetoTeste.cor = 'preto' //Vai permanecer branco pois é inalterável
console.log(objetoTeste)



//6) Object.assign(objsAlvo, x, x2, x3, ...) ---> junta elementos dos X objetos passados no objeto alvo, ou seja, pega os atributos de todos e junta tudo num só, criando um obj result


const cameraInfo = { //quero add essas infos no obj que representa o iphone
    cam_frontal: '10mp',
    cam_traseira: '16mp'
}

const iPhoneX = Object.assign(objetoTeste, cameraInfo) //junta as infos de cameraInfo com o prncipal e gera um obj resultante

console.log(iPhoneX)

//OBS: se houver atributos com o mesmo nome, vai sobrescrever pelo o do ultimo parametro que tiver 