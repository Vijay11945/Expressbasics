const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/app-pro',(req, res, next) => {
    console.log('start the middleware!');
    res.send('<form action = "/pro" methos ="POST"> <input type = "text" name = "title"><button type = "submit">ADD</button></form>');
    //next(); // Allows the request to continue to the next middleware in line
});
app.post('/pro',(req, res, next) => {
    //console.log('In the middleware!');
    //res.send('<h1>Hello from Vijay Pro!</h1>');
    console.log(req.body);
    res.redirect('/');
    //next(); // Allows the request to continue to the next middleware in line
});

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    //res.send( { key1: 500 })
    res.send('<h1>Hello from Vijay!</h1>');
   
});

//const server = http.createServer(app);

app.listen(3000);
