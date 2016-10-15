
var server = require('./mc/server');
var handler = require('./mc/handler');
var router = require('./mc/router.js');

var handle = {};


handle.render = handler.render;
handle.getCss = handler.getCss;
handle.getJs = handler.getJs;
handle.getImg = handler.getImg;
handle.getData = handler.getData;
handle['/aozora'] = handler.aozora;

server.start( handle, router.router );