//Criarei uma função que instancia outras funções (transforma elas em objetos)

const instanciadora = function (funct) { //eu poderia por direto a função literal nas chaves, dependendo do meu objetvo!!

    return new funct;
}

const iphoneX = function () {

    this.nome = 'iPhone X';
    this.codigo = 14558814050;
    this.camera = {frontal: '10mp', traseira: '16mp'};
    this.CalculoPreço = (preco, tributos) => {
        return (preco*tributos) + preco;
    }

}


const iphoneObj = instanciadora(iphoneX);

console.log(iphoneObj);

console.log(`O preço do iPhone X com tributos é: ${iphoneObj.CalculoPreço(3450, 0.13)}`);

//Uma função tbm pode retornar outra. Ai eu armazeno essa outra numa variável e como essa variável seria uma função que ela recebueu, eu invoco normal