const fs = require("fs");
module.exports = function(db, app){
    app.post("/api/login",function(req,res){
        var rawdata=fs.readFileSync("../Data/users.json","utf8");
        var data=JSON.parse(rawdata);
        user={};
        
        user.username=req.body.inputUsername;
        user.valid=null;

        for (i=0; i<data.users.length; i++){
            if (user.username===data.users[i].username){
                user.valid=true;
                user.role=data.users[i].role;
                user.groupAdminRole=data.users[i].groupAdminRole;
                break;
            }else{
                user.valid=false;

            }
        }
        res.send(user);
    });
    app.post("/api/adduser", function(req, res) {
        var rawdata = fs.readFileSync("../Data/users.json", "utf8");
      
        var thisdata = JSON.parse(rawdata);
        user = {};

        valid = true;
      
        user.username = req.body.inputUsername;
        user.role = req.body.inputRole;
        user.email = req.body.inputEmail;
        user.groups = [];

        for(i=0; i < thisdata.users.length; i++){
          console.log(thisdata.users[i].username)
          if(user.username === thisdata.users[i].username){
            console.log("already exists");
            valid = false;
            break;
          }
        }

        if(valid === true) {
          thisdata.users.push(user);
          saveFile();
        }
        
        thisdata.users.push(user);
        function saveFile(){
        var newdata = JSON.stringify(thisdata);
        fs.writeFile("users.json", newdata, function(err) {
          if (err) {
            console.log(err);
          }
        });
      }
        res.send(valid);
      });
}