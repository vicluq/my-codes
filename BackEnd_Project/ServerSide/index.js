const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");


const app = express();
app.use(cors());
app.use(bodyParser()); //usado para fazer o parse do body do post e fazer o servidor ler o objeto json!!
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(8080, () => {
  console.log("my first server");
});


app.get("/", (req, res) => {
  //if i make a get request to access the main rout ('/' representation) i configured to show this
  res.json({
    message: "Welcome!!",
  });
});

const users = [
  {
    cpf: "13240590441",
    senha: "29112001",
    CEP: "52060282"

  },
];


function getCEP (cep) {
    
  const url = `https://webmaniabr.com/api/1/cep/${cep}/?app_key=e6rS9bgDyubYMVL6la03Lhe6ftL3r160&app_secret=YbgHGljSS6HH9oFOtuSeWOhiVs591GJMnNMbil7KjRZcrvSe`
  
  return axios.get(url) //retorno pois quando chamo a função o then pega esse retorno
  .then((resp) => {
    return resp.data
  }).then((resp) => {
    return resp
    
  })
  .catch((err) => {console.log(err)})
       

}


app.post("/register", (req, res) => {
  console.log(req.body);


  if (req.body.cpf.length == 11 && req.body.senha.length > 6 && req.body.CEP.length == 8) {
    
      getCEP(req.body.CEP).then((resCEP) => { //o then aqui serve para lidar com resposta assinc da função que pega os dados do cpf, então ele pegaa resp após a função terminar e executa tudo!
        
      if (resCEP.error) {
          console.log(resCEP.error)
          res.status(422);
          res.json({
            error: "Your CEP does not exist",
          });
          }
      
      else {
            
            const result = Object.assign(req.body, resCEP)
            console.log(result)
            users.push(req.body);
            
            
        }
      })
      
  } 
  
  else {
    res.status(422);
    res.json({
      error: "Your data is incorrect and it is missing something",
    });
  }
});

//LOGIN PART





app.post("/login", (req, res) => {
  
  const array = users.filter((user) => {return user.cpf == req.body.cpfLog && user.senha == req.body.senhaLog;});
  
  if (array[0] != undefined) {
        res.status(200)
        console.log(array)
  
  } else {
        res.status(422)
        res.json({
            message:'invalid cpf of user ame'
        })
    }
});


//quando eu acessar os dados dos registrados
app.get("/register", (req, res) => {
  res.json(users);
});
