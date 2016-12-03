var express			= require( "express" ),
playerRouter		= express.Router(),
playersController 	= require( "./playersController.js" );

playerRouter.route( "/createplayer" )
	.post( playersController.createPlayer )

playerRouter.route( "/createhighscore" )
	.post( playersController.createHighscore )

playerRouter.route( "/topten")
	.get( playersController.topTen )

playerRouter.route( "/lastadded" )
	.get( playersController.findLast )
  
module.exports = playerRouter;