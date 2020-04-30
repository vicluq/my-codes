//! É uma forma de tornar um processo Async em um processo Sync, pu seja, só coontinuar o código após algo chegar!!! 
//*OBS: em quest~es performáticas, trabalahar com promisses é o ideal!!

/*
 * 1) A funcção tem que ser marcada com Async --> sempre deve haver uma função envolvida. 
 * 2) Await fica onde recebe os dados da promise. Por isso a functio é async, pois ela aguarda dados de uma promise
 */

const axios = require('axios');

function getTurma(turma) {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;
    return axios.get(url, { method: "GET" }); //retorno a promessa!
}
  

async function getAlunos () {
    
    const res = await getTurma('A') //! "espere o retorno dessa fun para prosseguir"
    const data = res.data
    const nome = data.map((obj) => obj.nome)
    return nome
}

getAlunos().then((resp) => {console.log(resp)}) //! Fora da função eu tenho que usar promisse, mas dentro não por conta do async awiat, que só é válido dentro de uma função async!