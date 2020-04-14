this.a = 10 //coloquei a no obj global

let b = 80

this.c = 20 //coloquei c no obj global

console.log(this.a, this.b, this.c); //checando se estão no objeto global --> this no escopo do arquivo(que eh um módulo) remete ao objeto global do node

console.log(module.exports); //objeto que contém os elementos que quero exportar para acessar em outros arquivos


//Cada arquivo no do js eh um módulo e pode ser juntado com outros módulos/arquivos
//no browser/front end, eh tudo unificado ali então deve ter cuida

