/* ATRIBUIÇÕES POR VALOR: QUANDO A VARIÁVEL RECEBE O VALOR DE OUTRA, UMA CÓPIA DA VARIÁVEL E NÃO O ENDEREÇO DELA.
   SENDO ASSIM, SE VOCÊ ALTERA UMA VARIÁVEL QUE RECEBEU O VALOR DA OUTRA, SÓ SERÁ ALTERADO NELA

   Isso ocorre com TIPOS PIMITIVOS(numeros, strings, formados por só um tipo) pois não requerem um espaço grande da RAM 
*/

let a = 20;
let b = a;

b = 10;

//a continua sendo 20

/* ATRIBUIÇÕES POR REFERÊNCIA: QUANDO A VARIÁVEL RECEBE O ENDEREÇO DE MEMÓRIA DE OUTRA VARIÁVEL E NÃO APENAS UMA CÓPIA DELA, ENTÃO TUDO O QUE MUDAR
   EM UMA, MUDARÁ NA OUTRA.

   Isso ocorre com TIPOS COMPLEXOS (OBJETOS, ARRAYS, conjuntos de elementos primitivos/complexos) pois pegam bem mais memoria da RAM 
*/

const array1 = [1, 3, 4, 5, 9];
const array2 = array1;

array2[2] = 20;

console.log(array1, array2); // O elemento de índice 2 teve seu valor alterado em ambas


//Undefined: ela aponta para algum lugar na memória mas não tem nenhum valor atribuído a esse endereço
//null: ela não aponta em canto nenhum da memória. Útil caso eu queira excluir qualquer valor e endereço dela, para "liberar espaço na memória"


let string; //não definida - undefined

console.log(string.toString()); //não teria como alterar para string por exemplo pois não há valor para alterar



