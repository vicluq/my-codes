//JSON é apenas um formato textual de leitura de dados, ou seja, é em formato de string


//transformando OBJ --> JSON (JSON.stringfy())
const package = {
    project: 'Corona Virus Status Brazil',
    author: 'Victoria Luquet',
    version: '1.2',
    recentFeatures: 'Evolution Graphics',
    data: 'Coronavirus API and NOVELcovid API',
    style: 'By me'

}

console.log(JSON.stringify(package))

//Convertendo json em objetos

console.log(JSON.parse('{"nome": "Victoria", "idade": 18}')) //eu tenho que por tudo entre aspas simples e o nome dos atributos em aspas duplas que é o formato JSON
//valores numericos eu não ponho entre aspas duplas, se for string eu ponho