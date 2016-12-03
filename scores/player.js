var mongoose = require( "mongoose" );

var Player = mongoose.Schema({
	name			: String,
	email			: String,
	time : { type : Date, default: Date.now }
});

module.exports = mongoose.model( "Player" , Player );