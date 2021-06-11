const axios = require("axios");

const request = {
  url: "https://servicodados.ibge.gov.br/api/v1/localidades/distritos",
  method: "GET",
};

axios(request).then((data) => {
  console.log(data);
});
