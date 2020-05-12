const express = require('express')
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.urlencoded({extended: true}))

server.listen(3003, () => {
    console.log('server is up and running!');
})

server.get('/', (req, res) => {
    res.send('Welcome to my server')
})

