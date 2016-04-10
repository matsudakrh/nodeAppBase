var http = require('http');
var url = require('url');
var qs = require('querystring');


var start = function (handle, router) {


    http.createServer( function (req, res) {

        var pathname = url.parse(req.url).pathname;

        router( handle, pathname, req, res);


    }).listen(8080);

};

exports.start = start;