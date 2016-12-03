var Player = require("./player.js");
var Highscore = require("./highscore.js");
//mailer 	= require("../mailer/mailerHelper.js");


var playersController = {
  	
	createPlayer : function ( req, res ) {
		var player = new Player;

		player.name 		= req.body.name;
		player.email 		= req.body.email;

		player.save(function(err, player){
			if (err) throw err;
		})

		//mailer.confirmPlayer(req)
		res.json({message: player, success: true})
	},
	findLast : function (req, res) {
		Player.find({}).sort({time: 'desc'}).limit(1).exec(function (err, players){
			if (err) throw err;
			res.json(players)
		})
	},
	createHighscore : function ( req, res ) {
		var highscore = new Highscore;

		highscore.name 		= req.body.name;
		highscore.email 	= req.body.email;
		highscore.score	 	= req.body.score;
		highscore.totalShots= req.body.totalShots;

		highscore.save(function(err, highscore){
			if (err) throw err;
		})

		//mailer.confirmhighscore(req)
		res.json({message: highscore, success: true})
	},
	topTen : function (req, res) {
		Player.find({}).sort({score: 'desc'}).limit(7).exec(function (err, players){
			if (err) throw err;
			res.json(players)
		})
	}

}

module.exports = playersController;
