var mongoose = require( "mongoose" );

var Highscore = mongoose.Schema({
	name			: String,
	email			: String,
	score   		: Number,
	totalShots 		: Number,
	time : { type : Date, default: Date.now }
});

module.exports = mongoose.model( "Highscore" , Highscore );

// mongoexport -h ds119618.mlab.com:19618 -d zte-bball -c highscores -u ztebball -p production -o highscores.csv --csv -f <name, email, score>