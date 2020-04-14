//CUIDADO.... ++x != x++ e pode trazer prob em ciclos... No ++x, ele soma e depois verifica a condição, no x++ ele verifica a condição e só depois soma!!

/*For --> mais utilizado em momentos em que há uma quantidade espcífica de laços a cumprir. Quando vc quer ordenar arrays por exemplo
*Como já vimos muito de for, vamos focar em for in*/


//For ... in ... --> você recebe o índice do array, ou seja, para i em array ele iguala o i ao índice a cada ciclo

const array = [1, 5, 7, 10, "vic"];

for (let x in array) {
    console.log(array[x]); //nas listas de python não precisa dizer o indice pois elas tem qntd indeterminada de item. lista PY == array em JS
}

//mesmo funcionameno para acessar os atributos dos objetos: mais sentido que array, pois supomos que vc queria fornecer dados que a pessoa pediu

const obj = {tipo: 'celular', preço: 3000};

for (let x in obj) {
    console.log(obj[x]);
}


//USANDO BREAK E CONTINUE - EX: pegando apenas pares ou ímpares

const array2 = [1, 5, 7, 10, 4, 7, 9 , 8, 2];

for (let y in array2) {
    
    if (array2[y] % 2 != 0) {
        continue; //o continue faz com que pule pro próximo ciclo (parando o atual) e não leia mais nada embaixo
    }
    console.log(array2[y]);

}


//NÃO SE ACOSTUMAR E NÃO ABUSAR........ QUEBRAR EM MÉTODOS E FUNÇÕES

//o brake quebra o ciclo todo e vai pra fora do ciclo e quebra o ciclo mais próximos dele, ou seja se eu tiver ciclo dentro de ciclo e por um brake no intrno,
//ele quebra só o interno. COMO BOTAR UM BRAKE INTERNO QUE QUEBRE UM CICLO EXT 

externo: for (...) {
    for(...) {
        break externo; //aqui digo que ele deve quebrar o externo
    }
}