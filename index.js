var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');
var bodyParser	= require('body-parser');
var morgan 		= require('morgan');
var cors        = require('cors');
var playerRoutes = require ('./scores/playerRouter');
var mongoUri 	= process.env.MONGOLAB_URI || "mongodb://ztebball:production@ds119618.mlab.com:19618/zte-bball"; 
var port 		= process.env.PORT || 3000;

mongoose.connect(mongoUri);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use( express.static( __dirname + "/public" ) );

app.use('/players', playerRoutes );

app.listen(port, function(){
    console.log("ZTE Basketball " + port);
})