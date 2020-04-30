## module.exports

> Ele é o atributo que todos os módulos possuem e dentro desse atributo (podemos fazer dele uma função ou um objeto como é mais comun) colocamos o que queremos exportar e tornar público para outros arquivos acessarem quando requerido o módulo.

**Ele pode ser uma função também, e quando chamado, retorna uma função**

const exported = require('./test') //o m.exp de test.js é uma função, entao a variável recebe essa função!!

console.log(exported(2, 4, 7, 9, 10))


## Módulos Do Usuário

- Eu posso acessar o arquivo do módulo --> require('./modulo') 
- Eu posso criar uma pasta pro módulo e neça por um índex e assim acessar só pelo nome da pasta com o diretório dela (se não tiver no node_modules)
- Se eu der o nome da pasta mas não houver um [index] ele não reconhece, a não ser que eu acesse o próprio arquivo entrando na pasta

## Módulos NPM locais

- Eles são instalados pelo npm na pasta node_modules do projeto, e como são locais só serão acessiveis pelos arquivos do projeto
- Como vão estar na node_modules eu não preciso fornecer nada só o nome da pasta pois quando faço isso digo para o require que esta na node_modules e    que tem um índex.js
- Se não houver um índex na pasta do módulo (módulos do npm sempre tem pois é pedido), ele não reconhece mesmo estando na node_modules
- *Como eu não forneci nada, só a pasta, ele assume que está no node_modules e que tem um índex*

## Módulos NPM Globais

- ficam na pasta node_modules do diretório raíz do node e podem ser acessados pelo [prompt] e por [qualquer_arquivo], basta dizer o nome do módulo!
- "npm ls --depth 0" fornece a lista de modulos locais em uma pasta específica
- "npm ls [-g] --depth 0" fornece os m[odulos globais os quais todos os arquivos podem acessar!!

## Exportanto Módulos

- usa-se ['module.exports.nomeAttrib']
- também: escrever o objeto literal de module.exports
- usar também p ['exports.nomeAtt']
- pode o [this.nomeatt] também

[module] é um comando que se por no console, me permite acessar todas infos daquele arquivo em forma de objeto pois um módulo é um objeto
se fizer isso, lá estará um atributo (que tbm é um objeto) [exports]. Daí vem [module.exports]. Ai está todo o conteúdo que quero tornar público do módulo

Para requisitar um módulo eu uso [require(stringParam)]. Require retorna o objeto module.exports.
O param depende de qual módulo(meu ou da npm, etc) e de onde ele vem!!

* OBS: CUIDADO PARA NÃO REATRIBURI MODULE.EXPORTS PARAOUTRA COISA SEM INCLUIR OQ ESTAVA ANTES, POIS ELE IGNORA UMA VEZ QUE FOI REATRIBUIDO, EXPORTANDO A NOVA ATRIBUIÇÃO SOMENTE

* exports aponta em module.exports --> referência e por isso consegue add coisas a ele. Se eu reatribuir exports, ele deixa de apontar em m.exp
    (exports = module.exports [atribuição])


## Importando JSON

- posso tbm importar json's usando o require!!

