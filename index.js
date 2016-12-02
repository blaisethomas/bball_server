var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI || "mongodb://ztebball:production@ds119738.mlab.com:19738/zte-bball-game";
var port = process.env.PORT || 3000;

mongoose.connect(mongoUri);

app.use('/scores', function(req, res ) {

    res.json({"hello" : "monkey"});
})
app.listen(port, function(){
    console.log("ZTE Basketball server side magic is happening on PORT " + port);
})