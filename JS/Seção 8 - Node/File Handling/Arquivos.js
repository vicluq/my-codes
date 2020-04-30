//Lendo assincronamente para habituar 

const fs = require('fs');

fs.readFile('C:\\Users\\Victo\\OneDrive\\Documentos\\JavaScript\\JS\\testing.txt', {encoding: 'utf-8'}, (err, content) => {

    if(err != null) {
        console.log('error', err)
    } else {
        personObject(content)
    }
})

function personObject (fileCont) {

    const elem = JSON.parse(fileCont)
    
    console.log(typeof elem)
    //console.log(elem.nome)
}


//Lendo Pastas --> comando fs.readdir() --> util caso eu queira checar se há algo que precise para abrir aqui

fs.readdir('C:\\Users\\Victo\\OneDrive\\Documentos\\JavaScript\\JS', {encoding: 'utf-8'}, (err, content) => {
    if (err) {
        //console.log(err)

    } else {
        console.log(content)
        fs.readdir('C:\\Users\\Victo\\OneDrive\\Documentos\\JavaScript\\JS\\'+ content[0], (err, stuff)=> {
           // console.log(stuff)
        })
    }
})


//Escrevendo em arquivos dados

const dadosPessoas = [
    {
        nome: 'Victoria',
        idade: 18
    },
    {
        nome: 'victor',
        idade: 18
    },
    {
        nome: 'Julia',
        idade: 19
    }
] 

//um array de objetos pode ser convertido em json de uma vez!!

fs.appendFile('C:\\Users\\Victo\\OneDrive\\Documentos\\JavaScript\\JS\\Node\\data.js', JSON.stringify(dadosPessoas), (erro) => {
    console.log(erro)
})


