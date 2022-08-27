var express = require('express'); //used for routing
var app=express();

var bodyParser=require('body-parser');

app.use(express.static(__dirname+'/www'));

app.use(bodyParser.json());


app.use(express.static(__dirname+'/www'));

app.listen(3000,'127.0.0.1',function(){
    var d= new Date();
    var n= d.getHours();
    var m = d.getMinutes();
    console.log('Server started at : '+n+m);
});



const UserList=require("Server\package.json");
//console.log(UserList);//length 3





app.get('/',function(req,res){
    res.sendFile(__dirname+"src\app\login\login.component.html");
});

app.post('/api/login',function(req,res){
    if (!req.body){
        return res.sendStatus(400)
    }
    var customer={};
    customer.email=req.body.email;
    customer.upwd=req.body.upwd;
    console.log(req.body.email);
    console.log(req.body.upwd);
    for(let i=0; i<UserList.length; i++){
        //console.log(UserList[i]["email"]);
        if(req.body.email==UserList[i]["email"]){
            console.log(UserList[i]["email"]);
            console.log(UserList[i]["password"]);

            if(req.body.upwd==UserList[i]["password"]){
                console.log(UserList[i]["email"]+"1");
                console.log(UserList[i]["password"]+"1");
                customer.valid=true;
                break;
            }else{
                console.log("pass")
                customer.valid=false;
            }
        }else{
            console.log("pass2")

            customer.valid=false;

        }
    }
    // if(req.body.email=="wonwoo@com.au" && req.body.upwd=="991106"){
    //     customer.valid=true;

    // }else{
    //     customer.valid=false;
    // }
    res.send(customer);
});




//bodyparser?

