//Encontre a mulher chinesa com o menor salário na lista de funcionários

const axios = require('axios')

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json')
.then(function (resp) { //then manda para a callback a resposta da request da api e a função é executada caso aja sucesso
    getResponse(resp.data)
}).catch (function (erro) {
    console.log(erro)
})

const sortArray2 = (array) => {

    let aux = 0;
    for(let i = 0; i < array.length; ++i) {
        for(let j = i; j < array.length; ++j) {

            if (array[i] > array[j]) {
                aux = array[i]
                array[i] = array[j]  //PODERIA TER USADO O REDUCE UMA VEZ Q O CONTADOR COMEÇA DO PRIMEIRO ELEMENTO EU COMPARIARIA COM O DO ELEMENTO ATUAL ATÉ RECEBER UM VALOR MENOR E AI REATRIBUIR O CONTADOR!!
                array[j] = aux
            }
        } 
    }

    return array
}

function getResponse (resp) {

   let data = resp;  

    let chineseWoman = data.filter(people => people.pais == 'China' && people.genero == 'F')
    
    let chineseWomanSalary = sortArray2(chineseWoman.map(woman => woman.salario))
    


    let lowestSalaryWoman = [];

    chineseWoman.forEach(function (woman, index) {
        
        if(chineseWomanSalary[0] == woman.salario){
            lowestSalaryWoman.push(woman)
        }
    })
       console.log(lowestSalaryWoman)   
}

