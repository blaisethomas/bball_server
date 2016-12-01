var express = require('express');
var app = express();
var port = 3000;

app.use('/', function(req, res ) {
    res.json({"hello" : "monkey"});
})
app.listen(port, function(){
    console.log("ZTE Basketball server side magic is happening on PORT " + port);
})