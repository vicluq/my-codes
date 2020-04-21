//This sempre se refere ao objeto mais interno ONDE ELE ESTA LOCALIZADO --> se eu quiser instinciar uma função e tornar o atributo publico para que todos possam mexer eu uso o this
//mas se eu quiser que o atributo seja privado (só podendo mudar na função, qustão de segurança) eu não uso o this!!

//OBS: O THIS PODE VARIAR QUEM ELE SE REFERE DEPENDENDO ONDE ELE FOI CRIADO E ESTÁ. EM UMA FUNÇÃO, O THIS SE REFERE AO GLOBAL, POIS É O OBJ QUE ESSA FUNÇÃO ESTÁ
//SE INSTANCIAR A FUNÇÃO, O THIS VAI SE REFERIR AO NOVO OBJETO, POIS O THIS ESTARÁ DENTRO DELE. DENTRO DE UM MÉTODO (FUNÇÃO DENTRO DO OBJETO), ELE SE REFERE AO OBJETO QUE É DONO DO MÉTODO,
//PODENDO VARIAR CASO EU DÊ A OUTRO OBJ ESSE MÉTODO E ELE TENHA UM ATRIBUTO COM O MESMO NOME

//RESUMIDAMENTE: o this se refere ao objeto que é dono da função que o this esta --> na funtion normal há variação mas na arrow ele preserva seu dono

//NA ARROW FUNCTION(DIFERENTE DA FORMA NORMAL), O THIS NÃO VARIA, ELE SEMPRE se refere ao objeto que é seu dono
// arrow não podem ser construtoras, pois o this não varia E REFERE-SE AO GLOBAL

//o this aqui não se referirá aos objetos, mas ao globalThis, módulo
const obj1 = {
    nome: "victoria",
    greeting:  () => {
        console.log(this.a); // como o this se refere ao módulo por ser uma arrow (esse arq), e this.a já existe, então mesmo no objeto ele imprime, pois 'a' está no global
    }                           // numa function normal, daria undefined, pois não existe um atributo 'a' no 'obj1'
}


obj1.greeting()

const obj2 = {
    nome: "victor",

}

obj2.greeting2 = obj1.greeting

obj2.greeting2()

//Na function normal

function myFunc () {
    this.a = 10 
    return this;    //AQUI O THIS EH O GLOBAL, POIS A FUNÇÃO FOI ESTABELECIDA FORA DE OUTROS OBJETOS --> ESTÁ DENRO DE UM MÓDULO DO OBJETO GLOBAL
}

console.log(myFunc());

const obj = new myFunc; //COMO EU INSTANCIEI, AGORA O THIS SE REFERE AO OBJETO 'obj' --> this.a = obj.a, pois agora this.a está dentro de outro objeto mais interno
console.log(obj);


console.log(myFunc()); //A FUNÇÃO Ñ INSTANCIADA O THIS SE REFERE AO OBJETO GLOBAL, QUANDO INTANCIO, OS ELEMENTOS COM THIS PASSAM A SE REFERIR AO OBJETO
console.log(a); //Como o a foi posto no global por conta do this, eu posso acessá-la fora da função pois ainda estou no global, o que não funcionaria em objetos mais internos

function calcTribute () {console.log(`${this.preço*1.135}`)}

global.preço = 900 //como o this se refere ao global, ent add um preço e ele calculo
calcTribute();

////////////////////////////////// FUNÇÃO BIND - MANTÉM CONSTANTE A REFERÊNCIA DO THIS DESSA FUNÇÃO!!! ///////////////////////////////////////////


const pessoa = {
    Nome: 'Victoria',
    saudação: function () {
        return this.Nome //this se refere ao objeto que é dono dessa função --> 'pessoa'
    }
}


console.log(pessoa.saudação()); //Daria victoria nomral, pois chamei a função direto do objeto

const armazenarFunc = pessoa.saudação; //armazeinei/copiei essa função fora do objeto pessoa, criando outra função 'armazenarFunc'

console.log(armazenarFunc());
//undefined pois, o this que está nessa função se refere ao global, já que armazenei pessoa.saudação fora do objeto (armazenarFunc não está em 'pessoa'), e o 
//global não tem nenhum atributo chamado Nome


const armazenarFuncBind = pessoa.saudação.bind(pessoa); 
//COM O BIND, ESSA FUNÇÃO SAUDAÇÃO E SEUS 'THIS' SEMPRE ESTARÃO RELACIONADOS (apontam) AO OBJETO 'PESSOA', MESMO ESTANDO FORA DELE
console.log(armazenarFuncBind()); 
