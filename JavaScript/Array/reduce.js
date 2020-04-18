//Ela se assemelha a uma laço do tipo 'for ... in ...', pois ela é executada para cada elemento do array com o objetivo de reduzi-lo em um unico valor(soo=ma dos elem por exemplo)
//Assim, a reduce fornece um valor final (acumulador) após executar a callback com cada elemento do array

/* array.reduce(function (acumulador, elementoAtual, indexAtual, arrayOriginal), valorInicial) 

        A callback recebe 4 parâmetros:
            - Acumulador: valor que será incrementado, alterado a cada callback (qntd = qntd elementos do array) pois ele é o retorno de uma call pra outra até a ultima, sendo retornado como resultado final após tudo--> definindo um valor inicial, o acumulador começa com esse valor
            - elementoAtual: isso quem fornece é o array, no caso, é o elemento atual que está sendo executado do array
            - indexAtual: index do elemento atual --> se eu começar de um index x, ele ignora os outros alementos de antes
            - arrayoriginal: array que está sendo executado o reduce (não é necessário, apenas se eu quiser exibir isso)

            por fim, eu devo retornar o valor do acumulador SEMPRE apos executar uma operação ou whatever com o elementoAtual

*/

