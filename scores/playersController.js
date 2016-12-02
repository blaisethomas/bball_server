var Player = require("./player.js");
//mailer 	= require("../mailer/mailerHelper.js");


var playersController = {
  	create : function ( req, res ) {
		var player = new Player;

		player.name 		= req.body.name;
		player.email 		= req.body.email;
		player.score	 	= req.body.score;
		player.totalShots	= req.body.totalShots;

		player.save(function(err, player){
			if (err) throw err;
		})

		//mailer.confirmPlayer(req)
		res.json({message: player, success: true})
	},
	findTopTen : function (req, res) {
		Player.find({}).sort({time: 'desc'}).limit(5).exec(function (err, players){
			if (err) throw err;
			res.json(players)
		})
	},
	findLast : function (req, res) {
		Player.find({}).sort({time: 'desc'}).limit(1).exec(function (err, players){
			if (err) throw err;
			res.json(players)
		})
	}
}

module.exports = playersController;
