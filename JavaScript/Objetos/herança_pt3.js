//Para Onde apontam os protótipos de objetos instanciados de funções construtoras...

function createOBJ (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const obj = new createOBJ('victor', 19);
const obj2 = new createOBJ('victoria', 18);

console.log(createOBJ.prototype) //cada função é um ""protótipo"" (funções não são objetos para serem prot) do objeto que surge dela e 
                                 //ela tem um atibuto que é um objeto protótipo (nomeFunc.prototype(não é prot da função)) para qual todos os obj instanciados dela apontam
console.log(createOBJ.prototype === obj.__proto__) //true --> o objeto surge dela, então tem dentro dele o prototipo da função e não o Object.prototype
console.log(Object.prototype === obj2.__proto__) // false --> pois não surgiu desse objeto, mas sim de uma function e de seu objeto protótipo

//Eu posso ADD ELEMENTOS AO atributo PROTÓTIPO DA MINHA FUNÇÃO, e assim todos os objetos vindos dela terão acesso pela herança. Isso é seguro pois cada função tem seu aatributo prot específico, então naõ mexe com tudo

createOBJ.prototype.cidade = 'Recife' //POSSO ADD MÉTODOS TBM!!
console.log(obj.cidade)
console.log(obj2.cidade)

//NUMA FACTORY --> os obj são do Objct.prototype pois a função não eh molde de um objeto, mas apenas retorna um!!

function factoryOBJ (nome, idade) {
    
    return {
    nome: nome,
    idade: idade
     }
}

const obj3 = factoryOBJ('joao', 20)

console.log(obj3.__proto__ === Object.prototype)
console.log(factoryOBJ.prototype) //ela tem um atributo protótipo, só que de nada pois ela não origina nada, apenas retorna algo

//eu posso fazer um obj que aponta (tem como prototipo) no Object.prot ou em qualuqer outro, apontar no prot de um função
obj3.__proto__ = createOBJ.prototype //agora tenho acesso à cidade e tudo q tiver nesse prototipe (que eh um obj) dessa função

/* PROTOTIPO PADRÂO DA FUNÇÂO --> funções tbm tem o atributo __proto__ e por padrão ele aponta para Function.prototype e o protótipo de Function.prototype aponta no Object.prototype, 
*  pois é parte desse protótipo dos objetos */

//OBS: __proto__ !!!=== prototype

//em suma... cada função tem um atributo (minhaFunc.prototype --> não é protótipo da func, mas sim, dos objetos q surgem dela) para qual todos os __proto__ de obj que surgem dela apontam e posso add coisas nesse atributo obj prototype da func
//e cada func tem um __proto__ também. E esse aponta para Function.prototype (protótipo padrão de todas as funções) e esse aponta no Object.prototype!!