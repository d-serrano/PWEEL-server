const express = require( 'express' );
const UserController = require( '../controllers/users' );
const multiparty = require ( 'connect-multiparty' );

const api =  express.Router();

api.post( "/sign-up", UserController.signUp );
api.post( "/sign-in", UserController.signIn );

module.exports= api;