//Classes são funções nativamente construtoras. Cada classe possui um elemento constructor e nesse elemento eu crio os atributos que serão parte do objeto
//fora do constructor eu crio os méodos


class newUser {
    
    constructor(nome, idade, senha) { //constructor = criar atributos
        
    	this.nome = nome
    	this.idade = idade
    	this.senha = senha
    }


    trocarSenha (novaSenha) {
    	return (this.senha = novaSenha)
    }

}

const user1 = new newUser('Victoria', 18, '12345')
console.log(user1)

user1.trocarSenha('54321')

console.log(user1)

/***********************************************  Herança com classes  *******************************************************/

//Para usar a herança, eu uso o operador 'extends' que significa: uma classe que extende outra e herda seus atributos e métodos


class iPhone {

    constructor (nome = 'iPhone X', preço, camera) {
        this.nome = nome
        this.preço = preço
        this.camera = camera
        
       
    }
}

////////MUITO RUIM PQP. Melhor instanciar a classe e add o protótipo manualmente!!
class iPhoneX_Branco extends iPhone {
    
    constructor (cor, id) {
        super('iPhone X', )
        this.cor = cor
        this.id = id

    }
}

const iphoneX = new iPhone ('iPhone X', 3999, '16mp')
const iPhoneBranco = new iPhoneX_Branco('Branco', 12442)

console.log(iphoneX)
console.log(iPhoneBranco)       