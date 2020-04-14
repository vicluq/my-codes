// função .charAt(x) --> Diz qual caracter está no índice 3 da string (0 1 2 3 4)

let nome = 'Victoria'; //(0V 1I 2C 3T 4O 5R 6I 7A)
console.log(nome.charAt(5));

//função charCodeAt() -> diz o número q representa o caracter (tabela ASCII) no índice x. Em C para obter iss, basta printar o char usando '%i'

let lugar = 'Pernambuco';
console.log(lugar.charCodeAt(6), lugar.charAt(6)); //b 98

//função substring(x) -> da a substring formada a partir do elemento em 1 (1 2 3 4 5...) || indexOf('a') -> indica o índice do caractere 'a' na string

let lugar2 = 'Pernambuco';
console.log(lugar2.substring(3), lugar2.indexOf('u')); //nambuco
          //se eu por substring(3, 7) --> ele vai do 3 ao 7 mas sem incluir o elemento no índex 7 (intervlado aberto)


 //função .concat(variável ou 'char') concatena elementos --> Você pode por um seguido do outro: .concat().conact(), etc.
//pode substituir concat por '+'
let nome2 = 'Victoria ';
let sobrenome = 'Luquet';

console.log(typeof nome2);
console.log(typeof sobrenome);

console.log('Meu nome é: '.concat(nome2).concat(sobrenome)); //muito útil para quando for necessário que um usuário forneça a entrada
console.log(nome2 + sobrenome); //melhor caso eu queria concatenar apenas duas variáveis

//função replace(x, y) --> x = caracter que vc quer substituir & y = caracter que vc que por no lugar de x

let empresa = 'amazon';

console.log(empresa.indexOf('o'));
console.log(empresa.replace('o', 'u'));

//regex - ÚTIL DEMAIS CACETA - SUBSTITUIR TODOS OS TERMOS/DÍGITO/ETC. ENTRE AS BARRAS COM O 'g' DE GLOBAL POR UM CARACTER
console.log(empresa.replace(/[a,z]/g, 'u')); //troca todos os a's e z's por u's

//função .split(objeto parâmetro de separação) --> separa a string em um conjunto de strings criando um array de strings

let lista = 'vick,julia,carlos,victor'; //se eu quiser trabalhar com cada um indivi, tem que separar isso num array
// se eu por espaço dps da vírgula, ele da um espaço no início de cada elemento string do array
console.log(lista.split(','));

//Tamanho de uma string

let cardnumber = "1234123456785678";
console.log(cardnumber.length);
