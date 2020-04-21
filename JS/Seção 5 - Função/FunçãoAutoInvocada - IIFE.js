//Ao declarar ela, ela é imediatamente invocada, pois já deve colocar os parenteses fechados do lado. tudo o que estiver dentro dela é local dela e inacessível no global por segurança. EH ANÔNIMA!!
//Ela é aquela criada dentro de parenteses e muito comum em aplicações.
//muito util para sites pois assim que carrega o site a função contendo um template ou sla é imediatamente invocada. no caso do console, ao executar ela imprime imediatamente e só

(function (x, y) {
        let sum = x + y;
        console.log(`The result is ${sum}`); //dentro dela eu posso fazer um programa normal e fugir do escopo global!!, nesse caso o interessante é não passar os parenteses pois eu posso fazer um programa todo
})(3,7) //como os parenteses que chamam uma função ja ficam aqui, ela é invocada na hora que compila executa

//não se pode crir duas no progrma pois não há como distinguir, pois são anonimas

