http=require('http');
querystring = require('querystring');
var qs,email,password;
http.createServer(function(req,res){
    var data1='';
    req.on('data',function(chunk){
        console.log(chunk);
        data1+=chunk;
    });
    req.on('end',function(){
        qs=querystring.parse(data1);
        console.log(qs);
        email=qs['email']
        password=qs['password']
        if(email=="charu.23it@kongu.edu" && password=="123"){
            res.write("Successfully Logged in");
        }else{
            res.write("Login Failure");
        }
        res.end();
    });
}).listen(3000);   
console.log('Server has Started.......');