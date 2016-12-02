var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');
var bodyParser	= require('body-parser');
var playerRoutes = require ('./scores/playerRouter');
var mongoUri 	= process.env.MONGOLAB_URI || "mongodb://ztebball:production@ds119738.mlab.com:19738/zte-bball-game";
var port 		= process.env.PORT || 3000;

mongoose.connect(mongoUri);

//app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')))

app.use('/players', playerRoutes );

app.listen(port, function(){
    console.log("ZTE Basketball server side magic is happening on PORT " + port);
})