/*
 * Define a request router
 *
 */

// Import Handlers
const handlers = require('./handler');

// Container for all routers
var routers = {};

// Create hello route
routers.hello = handlers.hello;

// Export routers

module.exports = routers;
