//base do padrão observer: ocorre um evento e a função (que recebe essa outra omo parâmetro) chama outra de novo para algo (callback)

//setInterval, setTimeOut --> métodos que se baseiam no callback. chama a função de parãmetro a caada intervalo, etc
//função filter de arrays --> retorna true ou false para cada elemento. Se for true, ela coloca esse elemento do indice x em outro array (filtrando pela condição), se der false, não
//Dar um clique e recebe algo é callback, pois o clique é um evento --> função 'onclick'

//Callback: função 'forEach' de arrays --> eh uma função que recebe outra como parâmetro e  chama essa função parametro para cada elemento do array para aplicar em cada elemento do array
//ela fornece como parametros o elemento do array e seu index, para a função que ela chama --> eu possoo ou não usar o parametro do index, e colocar apenas o primeiro parâmetro na callback

let arrayOfPrices = [3400, 2340, 1750.99, 445.60];
var arrayOfNew = [];
function applyTaxes (price) { //callback --> vai ser chama novamente pela forEach
    price  = (price + price*0.135).toFixed(2);
    console.log(`Price + taxes of the ${index + 1} element = ${price}`);
    arrayOfNew.push(price); //ai add esse novo preço em outro array
}

//Essa função de Array envia como parametro para a callback cada elemento do array 
arrayOfPrices.forEach(applyTaxes); //eu poderia retornar e criar um array com os preços novos
// arrayOfPrices.forEach(function (a) {console.log(a)}) //ela pode receber uma função direta
console.log(arrayOfNew);

//o evento nesse caso seria cada elemtno do array --> cada evento(pode ser um elemento, uma resposta, um cadastro novo que imprime sucesso ou não, etc) que encontra, chama novamente a função --- loop for poderia fazer isso --> o princípio das callbacks se baseiam em loops
//para que usar: deixa o código menor, mais limpo e mais eficiente



