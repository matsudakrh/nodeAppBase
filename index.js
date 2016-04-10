
var server = require('./mc/server');
var handler = require('./mc/handler');
var router = require('./mc/router.js');

var handle = {};



handle.render = handler.render;
handle.getCss = handler.getCss;

server.start( handle, router.router );