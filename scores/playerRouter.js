var express			= require( "express" ),
playerRouter		= express.Router(),
playersController 	= require( "./playersController.js" );

playerRouter.route( "/" )
	.get( playersController.index )
	.post( playersController.create );
  

module.exports = playerRouter;
