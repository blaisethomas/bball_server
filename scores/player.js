var mongoose = require( "mongoose" );

var Player = mongoose.Schema({
	name			: String,
	email			: String,
	score   		: String,
	totalShots 		: String,
	time : { type : Date, default: Date.now }
});

module.exports = mongoose.model( "Player" , Player );