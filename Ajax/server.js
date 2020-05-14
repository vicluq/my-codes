const express = require("express");
const bodyParser = require("body-parser");
const lodash = require('./node_modules/lodash');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const multer = require('multer');

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './dados')
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

// Upload

const upload = multer({storage: myStorage}).single('myfile') //upload é uma função que vai lidar com a request para pegar o file

server.post('/file/upload', (req, res) => {
        console.log(req);
        
    upload(req, res, (error) => {
        if (error) {res.status(400).json({erro: 'something wenr wrong', error})}
        else {
          res.send(req.file)
          console.log(req.file);
        }
    }) 
})


// form user

const users = [];

server.post('/user', (req, res, next) => {
  const body = req.body; console.log(body);
  
  
  if(body.username && body.email && body.password) { body.id = Math.floor(Math.random()*(2**20 - 1) + 1); users.push(body); res.status(200).send('success'); console.log(users);
   }
  else {res.status(400).send('you missed something')}
})


// AXIOS/jQuery GET

server.get('/ImpOuPar', (req, res, next) => {

      const num = req.query.num;
      if(Number(num)){
      if (num % 2 === 0) {res.send('Esse numero é par!')}
      else {res.send('Esse numero é ímpar!')}
      } else {res.status(400).send('NaN')}
})

// AXIOS/jQuery POST

server.post('/axiosPOST', (req, res, next) => {

  const body = req.body; console.log(body);
  
  if(body) {res.send(body)}

})

//server folder

server.use((req, res, next) => {
    console.log(`you have accessed a new route: ${req.url}`);
    next();
})

server.use("/ajax", express.static("."));


server.get("/", (req, res) => {
  res.send(
    "Welcome to my server, if you are looking for ajax go to localhost:3003/ajax"
  );
});


server.listen(3003, () => {
  console.log("server is up and running!");
});
