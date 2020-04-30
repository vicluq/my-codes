//! Usadas para tratar operações ASSÍNCRONAS. Se for aceita/sucesso, trata a resposta. Se for rejeitada, trata o erro
//Requisições de API, de dados de uma DB...

//* Quando resolvidas, elas caem na cadeia de then's, onde um then recebe o retorno de outro. Quando rejeitadas(token inválido, etc) caem no catch

//TODO: DESAFIO REQUEST

const axios = require("axios");

const turmas = ["A", "B", "C"];


turmas.forEach((turma) => {
  //Fazendo para cada turma. Útil pois poupa linha de código e facilmente armazeno numa dataBase!

  const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;
  axios.get(url, { method: "GET" })
    .then((listaAlunos) => {
      return listaAlunos.data;
    })
    .then((alunos) => {
      const nomes = alunos.map((obj) => obj.nome);
      console.log(nomes);
    })
    .catch((err) => {
      console.error(err);
    });  

});


// Usando função!

function getTurma(turma) {
  const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;
  return axios.get(url, { method: "GET" }); //retorno a promessa!
}

getTurma("A")
  .then((listaAlunos) => {
    return listaAlunos.data;
  })
  .then((alunos) => {
    const nomes = alunos.map((obj) => obj.nome);
    console.log(nomes);
  })
  .catch((err) => {
    console.error(err);
  });

  //Tem essa forma também, mas nesse caso ta ruim. Testar depois!
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]).then((resp) => resp.data).then((res) => {console.log(res.data)}).catch((e) =>console.log('e :>> ', e))
