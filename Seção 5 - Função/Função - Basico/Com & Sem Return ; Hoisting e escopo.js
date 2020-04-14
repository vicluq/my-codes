//A função executa alguma ação de aordo com um código colocado no seu bloco (delimitado com chaves)
// ela recebe os argumentos/parâmetros (variáveis, objetos, arrays) e retorna algo

/*Em C, você define a função usando o tipo de valor que ela retorna (int, float, char) ou 'void', em JS, usa-se o termo FUNCTION (fracamente tipada)
 *pois ela pode receber qualquer coisa */


 //Função sem retorno --> ela exeuta tudo nela e não retorna nada pro meio externo

function calculoMedia (x, y, z) {

   console.log(((x+y+z)/3).toFixed(2));
    
}

calculoMedia(5, 9.5, 8.8); //como a função não retorna nenhum valor, mas imprime direto, eu não posso armazenar o resulatado em variáveis de fora


//Função com retorno --> retorna valores de operações, etc. para fora dela e esse valores podem ser armazenados em variáveis externas

function calculoAreaTriangulo (base, altura) { //CASO EU NÃO ADD UM DOS PARÂMETROS AO CHAMAR A FUNÇÃO LÁ, SAI UNDEFINED. 
                                              // PODE-SE ATRUBIR UM VALOR PADRÃO QUE AGIRÁ CASO NÃO ADD O PARÂMENTRO (BASE, ALTURA = 10)
    return (base*altura)/2;                  //  EX: SE EU Ñ ADD UMA ALTURA, ESTOU CONSIDERANDO QUE É A MÍNIMA (10, NO EXEMPLO ACIMA)
    
    /*
    let area = (base*altura)/2    
    retunr area;
    */
   }


const areaTriang = calculoAreaTriangulo (15, 17); //como um valor é retornado para fora, ele pode ser armazenado em variáveis externas
console.log(areaTriang); //poderia por no console direto a chamada da função


//ESCOPO DE UA FUNÇÃO: é o corpo de uma função no JS delimitado por chaves. Todas as variáveis declaradas dentro da função não são acessíveis exernamente
// e se uma global (externa) tem o mesmo nome de uma do escopo, a da função tem prioridade e "altera" o valor da outra

//HOISTING (TANTO PRA FUNÇÃO QNT PRA O MEIO EXTERNO E APENAS PARA 'VAR'): é um comportamento do JS de elevar as declarações de variáveis (antes da execução) para o topo
//do escopo (corpo) da função ou do meio global, ou seja, você pode utilizar a variável mesmo antes de declará-la. EVITAR. (CRIME EM C E C++).

//OBS: classes são formas de criar funções também. Mais nas próximas aulas
//OBS2: utilizando a função 'new ...", pode-se criar objetos (instanciar)

