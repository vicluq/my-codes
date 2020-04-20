//REQUIRE IMPORTA O OBJETO MODULE.EXPORTS DO MÓDULO REQUERIDO!!
const modulo1 = require('./SistemaDeModulos') // O ./ indica que está na mesma pasta, se fosse outra pasta eu trocaria ali e adicionava!!

console.log(modulo1.sum(4, 9)) //como modulo1 recebe o objeto module.exports eu devo usar a notação ponto para usar os atributos do outro arquivo!!

//ele tava 'importando' os console. log do outro !!! INVESTIGAR
