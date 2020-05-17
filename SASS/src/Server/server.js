const express = require('express');
const bodyParser = require('body-parser');
const livereaload = require('livereload');


const app = express();

// Creating Live-Reload
const serverlive = livereaload.createServer({
    exts: ['js', 'html', 'css'],
    debug: true
})

serverlive.watch('C:\\Users\\Victo\\OneDrive\\Documentos\\WebCurso\\SASS\\Build')


app.use(require('connect-livereload')()); //Middleware: injecting livereload.js => criado pelo live reload server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser());

// Serving the app folder 
app.use('/app', express.static('C:\\Users\\Victo\\OneDrive\\Documentos\\WebCurso\\SASS\\Build'));

// setting my paths to server
app.get('/', (req, res, next) => {
    res.send('WELCOME TO MY APP => go to localhost:3003/app')
})


app.listen(3003, () => {
    console.log('server is running at http://localhost:3030', new Date);
})



