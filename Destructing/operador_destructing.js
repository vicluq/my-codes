// Operadores de destructing EXTRAEM elementos de Arrays e Objetos -> fazem uma cópia deles e trazem pra fora para serem usados aqui
// NÃO CONFUNDIR COM DECLARAÇÃO DE ARRAY E OBJETO --> ELES NÃO TEM INDENTIFICADOR
const pessoa = {

    nome: "Victoria",
    idade: 18,
    numero: 993465919,
    user: "victorialuquet",
    saude: {
            sangue: "A+",
            alergia:"poeira"
    }
}


const {idade, user} = pessoa; // extrai o que ta entre chaves do objeto/estrutura do outro lado da igualdade (ainda estarão na estrutura)
                                //Agora, essas variáveis estão disponíveis para seres usadas normalmente no escopo global independetes do objeto
console.log(pessoa);
//Retirando elementos aninhados
const {saude: {sangue, alergia}} = pessoa; 



// Eu posso trocar o nome das variáveis quando extraídas:

const {idade: age, user: tag} = pessoa; //agora eu extrai e troquei o nome delas no escopo global

//OBS: se tentar retirar algo que não está lá, ele retorna undefined no console


//DESTRUCTING COM ARRAYS - usa-se colchetes pois arrays são definidos com colchetes || SERVE TAMBÉM PARA ATRIBUIR ELEMENTOS DE UM ARRAY À VARIÁVEIS SEM PRECISAR DE MUITAS LINHAS DE CÓDIGO

const array1 = [2, 9, "vick", 25.2, "luquet"]; 

const [elem1, , elem3, , elem5] = array1; //voce não usa o índice, mas sim, nomes para representar, na posção do elemento que quer tirar

console.log(elem1, elem3, elem5); //ATRBUI OS ELEMENTOS DAS POSIÇÕES À ESSAS VARIÁVEIS
console.log(array1)

