//Variaveis Globais: estão no escopo global, sem estar dentro de nenhum bloco, nem escopo de função
//as globais podem ser acessadas em qualquer bloco, mas as não globais não podem 

//HOISTING (TANTO PRA FUNÇÃO QNT PRA O MEIO EXTERNO E APENAS PARA 'VAR'): é um comportamento do JS de elevar as declarações de variáveis (antes da execução) para o topo
//do escopo (corpo) da função ou do meio global, ou seja, você pode utilizar a variável mesmo antes de declará-la. EVITAR. (CRIME EM C E C++).



//let
let a, b; //podem ser declaradas com 'var' ou 'let' --> preferir 'let'!!

a = 10;
b = 5;

console.log(a, b);
console.log("a + b =", a+b); //Pode por operações!

{{{{let num = 18; console.log(num);}} let num = 14; console.log(num);}} 
/*mesmo nomes, mas não altera um o valor da outram pois let só se acessa em seu bloco
**como se fossem variáveis diferentes */


// var

var x = 2;
var y = 3;

/* 
* var a = 10;
*             ' var' permite declarar a variável múltiplas vezes,
*                enquanto que 'let' permite apenas ua vez, mas podendo alterar o valor de boa depois como em C 
* var a = 20;
*
* Ela também estará visível fora do escopo de blocos de código com exceçõ de escopos de funções
* {{{{{var nome = "vic"}}}} var nome = "victor" (alterou dentro e fora)} poderia acessar ela fora
*/