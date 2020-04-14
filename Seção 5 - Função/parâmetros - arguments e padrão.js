//Posso passar mais parametros que o pedido, e não dará erro. A função pega os primeiros

/*Se não tiver retorno, mas sim, um console.log e eu  chmamar a função num console.log, ela imprime o c.l da função e um undefined pro c.l onde ela foi chamada
 *pois como não retorna nada, ela não tem nda o que dá para esse c.l*/

//Array/Objeto: posso mandar tanto uma variável que guarda um array/objeto, quanto um array diretamente caLLFunção([2, 2, 2, 2, 2]);

/********************************************************************************************************************************************/

//ARGUMENTS: Não passando parâmetros e recuperando esses parâmetros na função --> Propriedaade "arguments"!!
        //arguments criar um array com todos os argumentos passados na ordem passada na chamada da função!!

const somarElementosArray = function () { //Não funcionou com arrow func

    let soma = 0;
    for (x in arguments) { //mesmo sem ter passado um parâmetro, arguments pega o que eu por nos parênteses e cria um array com esses elementos!!
        soma += arguments[x];
    }
    return soma;
}


console.log(somarElementosArray(1, 55, 8, 10, 5)); // arguments = [1, 55, 8, 10, 5] criar esse vetor 
console.log(somarElementosArray(1, 58, 7, 19, 23));

/********************************************************************************************************************************************/

//PARÂMETRO PADRÃO: Eu defino um valor padrão para caso eu não forneça nada

// 1) Usando o operador ||... se o primeiro for falso, ele usa o outro valor --> a = a || 10 --> se a for undefined ele eh falso ent usa 10 (ZERO NÃO FUNCIONA PQ SEMPRE EH FALSO)
// 2) Usando operador ternário - se x == undefined ou nulo, usar outra coisa. ex: perg se eh um numereo ou n (isNaN())
//uteis para caso eu queira estabeleceu um padrão para uma variável

//Padrão oficial do ECS6: Usando o '=' direto ao definir os parãmetros ---> ou seja function x (a = 10, b = 12). Se a e b não forem fornecidos ele usa 10 e 12
