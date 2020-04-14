//Quando adiciona as chaves nos parâmetros da função, por estar antes da 'igualdade' ou escopo elas indicam destructing de objeto, ou seja,
//quando eu passar um obejeto que tem 'min' e 'max' definidos, a função vai extrair dele o conteúdo desses identificadores pelo destructing
//OBS: O NOME DO PARAMETRO DEVE SER IGUAL AO DO OBJETO, ÓBVIO!

const randomNumber = ({min = 0, max = 40}) => {

    const random = Math.floor((Math.random() * (max - min)) + min); 
    return random;                                     
}

const objMinMax = {
    min: 20,
    max: 100,
    idade: 18
}

console.log(randomNumber(objMinMax)); /*por ter o destructing no parâmetro da função, indicando que ela quer extrair só min e max, 
                                        quando passar obj ela só pegará isso --> {min, max} = objMinMax  */
console.log(randomNumber()) //Se eu não passar um obj ele não roda pois ele espera um obj para desestruturar


//ADICIONANDO OBJETOS DIRETAMENTE E NÃO PELO NOME -> TUDO ENTRE CHAVES COM IDENTIFICADOR E DOIS PONTOS EH OBJETO
console.log(randomNumber({ min: 40, max: 50})) //AQUI ESTOU ADD OBJETOS DE FORMA DIRETA E NÃO PELO NOME DELE
console.log(randomNumber({ min: 40})) // aqui como o max não está definido, ele adota o valor padrão


//ADICIONANDO NADA
console.log(randomNumber()) //Se eu não passar um obj ele não roda pois ele espera um obj para desestruturar
