/*
 * Entry point for the server
 *
 */ 

// Dependencies
const http = require('http');
const serverProcessor = require('./libs/serverProcessor');
const config = require('./config');

// Create the server
const server = http.createServer(function(req,res){
    serverProcessor(req,res);
});

// Start the server
server.listen(config.port, function () {
    console.log("The server is listening on port " + config.port);
});