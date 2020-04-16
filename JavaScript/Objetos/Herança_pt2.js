//CRIANDO PROTÓTIPOS -- OBJETOS PAI

//OBS:  EU POSSO ACESSAR UM ATRIBUTO DO PAI POR MEIO DO FILHO, PORÉM ESSE ATRIBUTO NÃO ESTARÁ VISÍVEL PELO CONSOLE NO FILHO


const iphoneX = { //o prototipo desse é o Object.prototype
    nome: 'iPhone X',
    cor: 'Preto',
    preco: 3499.99,
    chip: 'A10 Bionic',
    camF: '10mp',
    camT: '16mp',
    calcTax() {
        return `Preço com imposto do iPhone X de cor ${this.cor}: ${(this.preco * 1.112).toFixed(2)}`
    }
}


Object.defineProperty(iphoneX, 'cor', {enumerable: true, writable: false})

const iPhoneXBranco = {
    __proto__: iphoneX,
    preco: 3899.99, //SHADOWING
    cor: 'Branco' 
}

console.log(Object.keys(iPhoneXBranco)) //não mostra os atributos do protótipo, apenas os próprios do objeto mesmo
Object.defineProperty(iPhoneXBranco, 'cor', {enumerable: true, writable: false})
console.log(iPhoneXBranco.calcTax()) //posso acessar essa função por meio do filho, pois ela está no protótipo. Como estou usando o this, e é um função normal, o this se refere ao obj que chama a função

//Para executar um método do pai no objeto filho eu uso o prefixo 'super'

const iPhoneXCinza = {
    __proto__: iphoneX,
    cor: 'Cinza'        
}

Object.defineProperty(iPhoneXCinza, 'cor', {enumerable: true, writable: false})
console.log(iPhoneXCinza.calcTax()) // o this não encotra preço aqui nesse pois o this refere-se ao cinza, então busca o preço do protótipo!!


//OUTRA FORMA DE ADICIONAR UM PROTÓTIPO A UM OBJETO

Object.setPrototypeOf(iPhoneXBranco, iphoneX) //add o seu=gundo como prot do primeiro


//**************************************************************************************************//

//Método Object.create(obj protótipo); é uma forma de criar objetos a partir de um protótipo logo de cara, permite add atributos e suas propriedades

//Se eu pedir para ver os atributos herdados, ele não mostra ao por o obj no console, porém... no "for in" ele mostra sim e é possível percorrê-los e alterá-los no obj normalmente (não interfere no pai)!

let i = 0

for (i in iPhoneXBranco) {
    console.log(`O atributo ${i} é próprio desse? ${iPhoneXBranco.hasOwnProperty(i)}`) //se eu por iphonexbranco[i] ele constroi um array em que os atributos são elementos e da erro
}                                                                                      // usando só o i ele me da o nome do atributo como se fosse Object.keys e verifica certo

