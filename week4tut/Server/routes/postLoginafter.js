var fs = require('fs');

module.exports=function(req,res){
    // let userobj={
    //     "userid":req.body.userid,
    //     "username":req.body.username,
    //     "userbirthdate":req.body.userbirthdate,
    //     "userage":req.body.userage
    // }
    // let uArray=[];
    // fs.readFile('Server\Data\extendedUsers.json','utf8',function(err,data){
    //     if(err) throw err;
    //     uArray=JSON.parse(data);
    //     uArray.push(userobj);
    //     console.log(userobj);
    //     uArrayjson=JSON.stringify(uArray);
    //     fs.writeFile('Server\Data\extendedUsers.json',uArrayjson,'utf-8',function(err){
    //         if (err) throw err;
    //         res.send(uArray);

    //     });

    // });       

    var age=req.body.age;
    var birthdate=req.body.birthdate;
    var email=req.body.email;
    var username=req.body.username;
    var role=req.body.role;
    var pwd=req.body.pwd;

    var inputdata={
        "username":username,
        "pwd":pwd,
        "email":email,
        "age":age,
        "birthdate":birthdate,
        "role":role
    }
    console.log(age,birthdate,email,username,role);
    fs.readFile('./Data/users.json','utf8',function(error,data){
            const obj=JSON.parse(data);

            found=false

            for (let i=0; i<obj.users.length; i++){
                if(email==obj.users[i]['email']){
                    obj.users[i]=inputdata;
                    //console.log("1"+obj.users[i]);
                    found=true;
                    
                    break;
                }
            }
            if(found==false){
                obj.users.push(inputdata);

            }



            // let i=obj.findIndex(x=>x.username==inputdata.username);
            // if(i==-1){
            //     obj.push(inputdata);
            // }else{
            //     obj[i]=inputdata;
            // }
            res.send(obj);

            let objJson=JSON.stringify(obj);
            console.log("2"+objJson);
            fs.writeFile('./Data/users.json', objJson,'utf-8',function(err){
                if (err)throw err;
            });




    });

    
}