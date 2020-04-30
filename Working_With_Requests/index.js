const express = require('express');// express returns a function called express used to instance apps to access the methods
const DataBase = require('./DataBase');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()) //USE quer dizer que para todas as requisições esses elementos se aplicam, pois eu não passei rota no use
app.use(bodyParser()) //ativo o body-parser em toda a aplicação!
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3003, () => { //callback is executed if conected to the port
    console.log('succesfull connection')
})

//accessing the main page
app.get('/', (req, res) => {
    
    console.log(req)
    res.send({
        message: 'Welcome, thanks for getting in!'
    })
})

// accessing the CEP checking page

app.get('/check_cep/:cep', (req, res) => {

        const CEP = DataBase.checkCEP(req.params.cep) //vai checar se esse cep passado de parametro na GET corresponde com algum da base de dados!!
        res.send(CEP)
})

//Adding a CEP

app.post('/add_cep', (req, res) => { //dados a serem add estarão no corpo da requisição!!
    console.log(req.body)
    const mensagem = DataBase.addCEP(req.body)
    res.send(mensagem)
})

//accessing all ceps

app.get('/check_cep', (req, res) => {

    res.send(DataBase.getAllCEP())
})

//Changing elem
app.post('/add_cep/:cep', (req, res) => { //pASSO como parametro na requisição fetch o que quero alterar e os novos dados no body da req
    console.log(req.body)
    const mensagem = DataBase.changeCEP(req.body, req.params.cep)
    res.send(mensagem)
})


//deleting elem
app.delete('/check_cep', (req, res) => {
    res.send(DataBase.deleteCEP(req.body.cep))
})