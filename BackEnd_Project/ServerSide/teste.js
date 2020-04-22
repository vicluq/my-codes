const axios = require('axios')
const fetch = require('node-fetch')

const cep = fetch('https://viacep.com.br/ws/01001000/json/', { //faria a função retornar 'cep' e usaria o then ao chamar!
    method: "GET"
}).then((resp) => resp.json()).then((jsonResp) => jsonResp)

cep.then((resp) => console.log(resp)) // o then serve para aguardar a resposta que cep receberá!

