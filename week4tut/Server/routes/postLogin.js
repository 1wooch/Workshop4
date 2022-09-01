var fs = require('fs');

module.exports=function(req,res){
    //console.log("1")
    var u=req.body.username;
    var p=req.body.pwd;
    console.log(req.body);
    console.log("u"+u,"p"+ p);
    c=u+p;
    console.log("c"+c);
    //const obj=JSON.parse('../Data/users.json','utf8');
    //console.log(obj)
    fs.readFile('./Data/users.json','utf8',function(error,data){
        if (error) return console.log(error);
        //console.log(data);
        const userArray=JSON.parse(data);
        //console.log(userArray);

        for(let i=0; i<userArray.users.length; i++){
            //console.log(userArray.users[i]["username"]); //for username
            if (u==userArray.users[i]["email"]&&p==userArray.users[i]["pwd"]){
                    userdata={
                        username:userArray.users[i]["email"],
                        pwd:userArray.users[i]["pwd"],
                        birthdate:userArray.users[i]["birthdate"],
                        age:userArray.users[i]["age"],
                        role:userArray.users[i]["role"],
                        username:userArray.users[i]["username"]
                    }
                    //res.send({"ok":true});
                    res.send({"ok":true,
                    email:userArray.users[i]["email"],
                    pwd:userArray.users[i]["pwd"],
                    birthdate:userArray.users[i]["birthdate"],
                    age:userArray.users[i]["age"],
                    role:userArray.users[i]["role"],
                    username:userArray.users[i]["username"]});
                    // .json({
                    //     username:userArray.users[i]["email"],
                    //     pwd:userArray.users[i]["pwd"],
                    //     birthdate:userArray.users[i]["birthdate"],
                    //     age:userArray.users[i]["age"],
                    //     role:userArray.users[i]["role"],
                    //     username:userArray.users[i]["username"]
                    // });
                    console.log("yeah");
                    return;
            }else{
                console.log("fk");
                //res.send({"ok":false});
                res.status({"ok":false});
                return;
            }
        }

        // let i = userArray.findIndex(user=>((user.username==u)&&(user.pwd==p)));
        // if (i==-1){
        //     res.send({"ok":false});
        // }else{
        //     console.log(userArray[i]);
        //     res.send({"ok":true});
        // }
    });
    
}