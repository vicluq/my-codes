//Quando eu quero que algo aponte para determinada coisa mesmo não estando inserido nessa coisa ---> bind(); ou tecnica 'self'


//SELF: EU IGUALEI UMA CONSTANTE 'SELF' AO OBJETO PESSOA, OU SEJA, SELF APONTA PARA PESSOA (IGUALAÇÃO POR REFERÊNCIA), SENDO ASSIM, AO INVÉL DE USAR O THIS
//NA FUNÇÃO PARA SE REFERIR AO OBJETO, EU USEI O SELF QUE PROVOCA O MESMO EEFEITO, MAS QUE SERVIRÁ PARA CASO EU COPIE ESSA FUNÇÃO E CRIE OUTRA, ELA SEMPRE SE REFIRA À PESSOA

const pessoa = {
    Nome: 'Victoria',
    saudação: function () {
        const self = pessoa;
        return self.Nome //this eh igual ao objeto que ele ta dentro, então se eu trocar a posição ele muda, mas o self sempre será 'pessoa'
    }
}


//instanciei uma variável em um função
const armazenarFunc = pessoa.saudação; //COPIEI ESSA FUNÇÃO CRIANDO OUTRA FUNÇÃO QUE NÃO PERTENCE AO OBJETO. SE FOSSE O THIS ELA NÃO PEGARIA O VALOR DO 
console.log(armazenarFunc());          //NOME, POIS NOME NÃO ESTÁ DEFINIDO NO OBJETO QUE TEM ESSA FUNÇÃO NOVA (GLOBAL), MAS AGORA SELF SEMPRE E IGUAL A PESSOA, ENTÃO A FUNÇÃO SE REFERIRÁ A PESSOA


///////////////////////////// Colocando um método de um obejto em outro para provar a variação do 'this' ///////////////////////////////////////////

const pessoa2 = {
    Nome: 'Victor',
    saudação: function () {
        return this.Nome //this eh igual ao objeto que ele ta dentro, então se eu trocar a posição ele muda, mas o self sempre será 'pessoa'
    }
}

console.log(pessoa2.saudação())

const pessoa3 = {
    Nome: 'Carlos',
    saudação: pessoa2.saudação
                
}

console.log(pessoa3.saudação())