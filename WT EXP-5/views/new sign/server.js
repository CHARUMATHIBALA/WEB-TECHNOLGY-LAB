http=require('http');

url=require('url');

querystring = require('querystring');

function onRequest(req,res){

var path = url.parse(req.url).pathname;

var query =url.parse(req.url).query;

var name =querystring.parse(query)["name"];

var password=querystring.parse(query)["password"];


res.writeHead(302, { "Location": "http://127.0.0.1:5500/" });

res.end();

}

http.createServer(onRequest).listen(4001);

console.log('Server has Started.......');