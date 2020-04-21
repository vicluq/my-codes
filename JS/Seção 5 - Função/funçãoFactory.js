//É uma função qu retorna funções, objetos, criando novos --> fábrica de objetos. Basta armazenar em uma variável e essa variável se tornará o obj retornado
//eu posso usar parâmetros para preencher esses atributos e tal

function createPeople (nome, idade, id) {
   
    return { //posso por métodos
        Nome: nome,
        Idade: idade,
        ID: id,
        Cidade: "Recife", //ta padronizado para recife, mas posso mudar
        saudação: function () {
            console.log(this.Nome); //eu uso o this, pois se eu alterar o nome futuramente, a saudação tbm altera. Eu não posso usar 'Nome', pois não é algo definido, no escopo da função e para acessar o atributo eu uso o this!!
        }  //eu troquei o nome em um obj  e coloquei no console e ele não atualizou pois não usei o this e o nome do atributo, ou seja, 'nome' é o parâmetro e não se refere ao atributo do obj, então não aatualiza
    }
}

const pessoa1 = createPeople("Victoria", 18, 10790);
pessoa1.Nome = "Victor" 
console.log(pessoa1);
pessoa1.saudação();

const pessoa2 = createPeople("Carlos", 22, 81237);

console.log(pessoa2);
pessoa2.saudação();
