const express = require('express');
const app=express();

var cors=require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static(__dirname+'/../dist/week4tut'));
console.log(__dirname);

const http = require('http').Server(app);
var server=http.listen(3000,function(){
    console.log("server Listening on port :3000");
})

app.post('/login',require('./routes/postLogin'));
app.post('/loginafter',require('./routes/postLoginafter'));






//const path=require('path');



//require('./routes/api-login.js')(app,path);  what I should put in api-login.js
//require('./listen.js')(http); ^same
