var mongoose = require( "mongoose" );

var Highscore = mongoose.Schema({
	name			: String,
	email			: String,
	score   		: String,
	totalShots 		: String,
	time : { type : Date, default: Date.now }
});

module.exports = mongoose.model( "Highscore" , Highscore );