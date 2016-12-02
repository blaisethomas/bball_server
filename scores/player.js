var mongoose = require( "mongoose" );

//creates a blueprint for users
var Player = mongoose.Schema({
	name				: String,
	email				: String,
	telephone		: String,
	message 		: String
});

module.exports = mongoose.model( "Player" , Player );