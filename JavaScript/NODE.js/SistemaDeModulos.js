//CommonJS -Sistema de Modulos do Node

//Cada arquivo é um módulo e seu código não fica visível para todo o node e outros arquivos, apenas se impportar e exportar para fora em outro arquivo!!
//MODULE.EXPORTS --> OBJ CONTENDO QUERO TORNAR PÚBLICO PARA OUTROS ARQUIVOS IMPORTAREM (EXEMPLO: exportar para o script principal os dados dos pokemons de outro arquivo)

//três formas de exportar algo do módulo (nesse caso, desse arquivo aqui)

this.myAge = 18 
exports.ola = function () { //é um objeto que aponta para module exports --> exports = module.exports --> atribuição por referência!
    return 'Olá Amigos'
}
module.exports.API_token = '1W24DC521LP24D8ggAF88350J941' //adição direta ao objeto (module.exports == this quando o this está no global do módulo)
//eu uso a Notação ponto pois estou add esses atributos/métodos ao objeto module.exports e preciso fazer isso caso queira exportar, pois esse objeto contém o que quero tornar publico a outros arquivos!!
//console.log(this == module.exports) //no global do módulo. se eu fizer isso em uma função não rola

/** FORMA MODERNA DE ADD - optar poe ela **/

module.exports = { //formar o objeto literal no arquivo!!
    API_token2: '252nu52iy36fu7g74o5b2c3c',
    sum: function (x, y) {
        return x + y
    }
}

//console.log(module.exports) // como eu criei o literal e não adicionei o que ja tinha adicionado antes, elemeio que recria o module.exports


/* //REQUIRE IMPORTA O OBJETO MODULE.EXPORTS DO MÓDULO REQUERIDO!!

const modulo1 = require('./SistemaDeModulos') // O ./ indica que está na mesma pasta, se fosse outra pasta eu trocaria ali e adicionava!!

console.log(modulo1.sum(4, 9)) //como modulo1 recebe o objeto module.exports eu devo usar a notação ponto para usar os atributos do outro arquivo!! */

console.log(module) //acessando informações de sse arquivo. Note que existe um atributo exports ao objeto modulo (modulo.exports)