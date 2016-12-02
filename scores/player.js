var mongoose = require( "mongoose" );

var Player = mongoose.Schema({
	name			: String,
	email			: String,
	score   		: String,
	totalShots 		: String
});

module.exports = mongoose.model( "Player" , Player );