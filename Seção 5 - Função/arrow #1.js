//Ela é sempre anônima, então deve ser feita usando uma variável ou const
//Basta substitiur 'function' por '=>'

let somarNum = function (a = 1, b = 1) {
    return a + b;
}

let somarNum2 = (a = 1, b = 1) => {
    return a + b;
}

//como só tenho uma linha de código, eu posso fazer o retorno implícito

let somarNum3 = (a = 1, b = 1) => a + b

/////// This e a Arrow function -- > função normal: this --> objeto que chama/dono da função, podendo variar sua referência ;; arrow: this --> ao dono/owner da função sempre, sem variar//////////////


const testFunc = () => {
    this.b = 20  //pertence ao global/MÉTODO pois ele é o objeto dono  --> posso acessar no module.exports
    this.a = 10 //pertence o global/MÉTODO
    const sumMult = () => {return this.a * this.b} //como o this.a/b originou 
    return sumMult(); //se nessa função fosse console.log, eu não retornaria, só chamaria!!
}

console.log(testFunc())
//const obj = new testFunc //não seria instanciável pois o this na arrow function não varia, então ele sempre se referiria ao global nesse caso!!

console.log(testFunc());
console.log(module.exports); //os this da arrow function vão pertencer ao módulo/arquivo. numa função normal, não.
//ou seja, o variáveis/atributos com o this numa function NORMAL, não vão estar no module.exports, pois não pertencem ao modulo
//variáveis/atributos com o this no global do arqv e numa arrow, vão estar pois o this se refere ao contexto léxico do módulo

//O THIS SEMPRE SE REFERE AO GLOBAL -> NODE OU WINDOW

//OBS: no caso abaixo, a função arrow só será oficialmente criada quando eu instaciar o objeto, ou seja, ela teria sido criada dentro do objeto



// const testFunc = function ()  {
//     this.b = 20
//     this.a = 10 
//     this.sumMult = () => {return this.a * this.b} 
    
// }

// const obj = new testFunc; 
// obj.a = 29;
// obj.b = 80;
// console.log(obj.sumMult());



//o this aqui tbbm não se referirá aos objetos, mas ao globalThis, módulo
const obj1 = {
    nome: "victoria",
    greeting:  () => {
        console.log(this.nome); 
    }                           
}


obj1.greeting.bind(obj1) //bind não funcionará pois a arrow não varia
obj1.greeting()

const obj2 = {
    nome: "victor",

}

obj2.greeting2 = obj1.greeting

obj2.greeting2()

