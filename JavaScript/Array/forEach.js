//Ele executa uma callback para cada elemento do array, porém precisa enviar esse novo valor para um outro array ou substituir, pois ele não altera o array origi e não retorna nada
//Essa função fornece para a callback como parâmetros o valor do elemento, seu índice e po array original completo nessa ordem, eu posso ignorar os que eu quiser, porém se quero usar o indice ou o array eu abrigatoriamente devo por o que vem antes!!

const produtos = ['iPhone SE', 'Dell Inspiron', 'MacBook Air'];
const preços = [3000, 4670, 5600];

const preçosDesconto = []

preços.forEach(function (valor, índice) {

	valor*=1.137;
	preçosDesconto[índice] = valor //ou usaria push()
})

console.log(preçosDesconto);

const produtosValue = {};


produtos.forEach(function (atributo, indice) {

	produtosValue[atributo] = preçosDesconto[indice]; 
		//a notação ponto não suporta variáveis como forma de uso, só usando os colchetes!
}) 

console.log(produtosValue);

/////CRIANDO UMA FOREACH PARA ENTENDER COMO FUNCIONA!

function applyDisc (valor, índice) {

	valor*=1.137;
	console.log(valor, (índice + 1))
}


Array.prototype.forEach2 = function (func) {

	for (let i = 0; i < this.length; ++i) { //no atributo prototype das funções eu devo usar o this para que a função se refira ao elemento que está chamado, nesse caso o array
		func(this[i], i, this);
	}
}

let array = [124, 454, 235]

array.forEach2(applyDisc)