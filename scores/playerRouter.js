var express			= require( "express" ),
playerRouter		= express.Router(),
playersController 	= require( "./playersController.js" );

playerRouter.route( "/" )
	.get( playersController.findLast )
	.post( playersController.create );

playerRouter.route( "/topten")
	.get( playersController.findTopTen )
  

module.exports = playerRouter;