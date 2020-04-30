const fs = require("fs");
const CEPs = require("./DataBase.json"); //automaticamente da um parse
console.log(CEPs);

function checkCEP(cep) {
  //get request para receber o cep passado como parametro na get, e esse parametro sera passado para essa func
  if (CEPs[cep]) {
    return CEPs[cep];
  } else {
    return { erro: "não existe esse CEP" };
  }
}

function addCEP(body) {
  //receber um objeto cep com o indentificador igual ao cep --> o obj 'body' será o body da post!!

  if (!!CEPs[body.cep]) {
    return { erro: "cep já existe" };
  } //poderia usar array e o método find ((elem)=>elem.cep == body.cep)
  else {
    if (!body.logradouro || !body.estado || !body.cidade || !body.cep) {
      return {
        erro:
          "verifique se adiconou todos os dados: cidade, estado e logradouro",
      };
    } else {
      CEPs[body.cep] = body; //fornece um atributo com o nome do cep!
      fs.writeFile(
        "C:\\Users\\Victo\\OneDrive\\Documentos\\JavaScript\\Working_With_Requests\\DataBase.json",
        JSON.stringify(CEPs),
        (erro) => {}
      );
      return { sucesso: "cep adicionado" };
    }
  }
}

function getAllCEP() {
  //get request para receber o cep passado como parametro na get, e esse parametro sera passado para essa func
  return CEPs;
}

function changeCEP(body, id) {
  if (!CEPs[id]) {
    {
      erro: "não pode mudar cep inexistente";
    }
  } else {
    CEPs[id] = body;
    fs.writeFile(
      "C:\\Users\\Victo\\OneDrive\\Documentos\\JavaScript\\Working_With_Requests\\DataBase.json",
      JSON.stringify(CEPs),
      (erro) => {}
    );
    return { sucesso: "informações alteradas com sucesso!" };
  }
}

function deleteCEP(cep) {
  const cepDeeletado = CEPs[cep];
  delete CEPs[cep];
  fs.writeFile(
    "C:\\Users\\Victo\\OneDrive\\Documentos\\JavaScript\\Working_With_Requests\\DataBase.json",
    JSON.stringify(CEPs),
    (erro) => {}
  );
  return [{ sucesso: "cep deletado" }, cepDeeletado];
}

module.exports = {
  checkCEP,
  addCEP,
  getAllCEP,
  changeCEP,
  deleteCEP,
};
