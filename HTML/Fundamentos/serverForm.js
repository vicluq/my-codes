const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser());

const Users = []

app.listen(3003, () => {
    console.log('you are connected');
})

app.get('/', (req, res) => {
    res.send(`you accessed the server at: ${new Date}`);
})

app.post('/users', (req, res) => {
    
    console.log('req.body :>> ', req.body);
    Users.push(req.body);
    console.log(Users);
    res.status(200).send('form submitted');
})

app.post('/users/change', (req, res) => {
    
   let index = 0;
   const validate =  Users.filter((user, num) => {
        index = num;
        return user.username == req.body.username && user.password == req.body.password
    })
    console.log('validate[0] :>> ', validate[0]);

    if (validate[0]) {
        Users[index] = Object.assign(Users[index], req.body);
        res.send('User successfuly altered');
    } else {
        res.status(404).send('the user does not exist or you put the wrong data'); //como eu não troqui o email e deixei em branco, o valor final ficou branco
    }

    console.log('Users :>> ', Users);
})