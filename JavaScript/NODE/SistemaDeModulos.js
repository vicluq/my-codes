//CommonJS -Sistema de Modulos do Node

/****************************** Módulos do usuário ************************************************/
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

const modulo1 = require('./SistemaDeModulos') // O ./ indica que está na mesma pasta.
//Acessando em bastas anteriores--> '../' sai da basta para uma superior --> '../../' duas pastas acima 

console.log(modulo1.sum(4, 9)) //como modulo1 recebe o objeto module.exports eu devo usar a notação ponto para usar os atributos do outro arquivo!! */

console.log(module) //acessando informações de sse arquivo. Note que existe um atributo exports ao objeto modulo (modulo.exports)

//Se meu módulo do usuário for uma pasta qucontenha um índex.js, posso só chrgar no diretório da pasta e dar o nome dela pq o require qnd recebe pasta busca o index.js


/******************************  Módulos de terceiros (bibliotecas) --> instalados do NPM  ************************************************/

    //ao fazer o require só põe o nome do módulo pois faz parte do pacote do node e reconhecido por ele.
    //Então, só põe o nome da bibliotec/módulo e o node vai procurar na pasta node_modules que eh a padrão, se não estiver lá ele não funciona, 
    //pois essa pasta eh a que encaminha o require quando uso só uma string pra dizer qual módulo quero.
    //O objetivo de encontrar o índex.js do módulo que vai importar a biblioteca com todos os module.exports dos módulos dela   

    const loadash = require('lodash') //esta instalado localmente então ele vê se na pasta do projeto possui a pasta module_exports, se não possuir ele não funciona, a não ser que eu indique com o diretório para o require

    const randomNum = loadash.random(1, 200, false) //false pois não quero float. MUITO ÚTIL NOS PROJETOS

    console.log(randomNum)

    const array = [3, 52, 124, 7]

    console.log(loadash.shuffle(array)) //randomiza o array --> math random nos índexes e math floor!

    //resumindo: se quero acessar um módulo/librarie só pelo nome, dentro dela deve conter um arquivo índex e ela deve star na pasta padrão 'node_modules'
    
    
//Modulo de terceiros GLOBALMENTE INSTALADOS --> se checar no terminal os modulos instalados (npm ls --depth 0) ele mostra q apenas nessa pasta(modulos locais) está mas não para o pc todo (globais)!!

    //módulos globais ficam aqui:C:\\Users\\Victo\\AppData\\Roaming\\npm\\node_modules, ou seja, no diretório do node no PC, então basta por isso

    //npm ls -g --depth 0 aqui eu vejo os globais que todos os arquivos em qualquer pasta pode

    //após o npm i adiciona a flag --g e ele adiciona globalmente e não só nesse projeto ou pasta --> exemplo usado foi o nodemon (nodemon nomearq.js no terminal para usar)!!
    //nodemon serve para ficar monitorando o código e qualuqer alteração ele registra e passa a exibir a partir da alteração --> bom pra back end e monitorar entrada e saida de threads

