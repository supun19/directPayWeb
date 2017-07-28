var express = require("express");
var app     = express();

var path = require('path');
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));

app.get('/',function(req,res){
  res.sendFile(path.join('/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join('/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join('/sitemap.html'));
});

app.listen(5002);

console.log("Running at Port 5002");