/*
 * Handlers for all routes
 *
 */

// Container for all handlers
var handlers = {};

// Hello handler
handlers.hello = function(data, callback){
    callback(200, {
        "message" : "Welcome to my API"
    });
};

//Not found handler
handlers.notFound = function(data, callback){
    callback(404);
};

//Export handlers
module.exports = handlers;
