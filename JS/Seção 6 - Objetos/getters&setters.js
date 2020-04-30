//É uma alternativa caso eu queira indicar que algum atributo deve ser privado/não alterado (motivos de seg), porém precise alterar futuramente por algum potivo

const object = {
    nome: "iPhone X",
    _value: 3899, //por convenção usa-se o _ para indicar que não deve se mexer no valor
    get value () {return this._value}, //a get serve para caso eu queira pegar/exibir esse valor ou incrementar
    set value(newV) {this._value = newV} //set serve para trocar/reatribuir esse valor se necessário
}

//OBS: SE ELAS TEM O MESMO NOME COMO SABER QUAL? O JAVASCRIPT SABE EM UAL SITUAÇÃO CHAMAR, POR EXEMPLO: SE FOR ATRIBUIÇÃO É 'SET' POIS SET SERVE PARA ISSO E NÃO TEM RETORNO
//SE FOR PARA EXIBIR NO CONSOLE OU EM ALGUM CANTO É A GET POIS ELA TEM RETORNO

//NÃO SÃO FUNÇÕES E POR ISSO NÃO USO OS ( ) PARA CHAMAR OU PARA PASSAR PARÂMETRO, NO CASO DO SET

console.log(object.value) //aqui o JS sabe que é o get pois possui retorno get serve para exibir algo convencionalmente privado basicamente


object.value = 4039 //como fiz uma atribuição ele associa que stou chamando o set pois o set tem essa função. Não usei pasrênteses pois não é função exatamente
//set só recebe apenas um parâmetro que receberá seu valor por uma atribuição ccomo a acima (NÃO É IGUAL A FUNÇÃO PQ NÃO É FUNÇÃO)

console.log(object.value) //agora estou chamando get novamente pois sua função é exibir e eu quero exibir e o JS entende isso

//eu poderia chamar _value tbm mas quis testar o get