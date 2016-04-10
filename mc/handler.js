
var fs = require('fs');
var jade = require('jade');


var render = function (req, res, pathname) {


    var path = pathname;

    if ( path === '/' ) {
        path = pathname + 'index';
    }

    fs.readFile( './views' + path + '.jade', 'utf8',function (err, data) {

        if ( err ) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            console.log('./views' + path );
            console.log('404 Not Found!');
            res.end();
            return;
        }

        var template = jade.compile(data);
        var compiled = template({name : 'hoge'});

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(compiled);
        res.end();

    });

};


var errorRender = function () {

};

var getCss = function (req, res, pathname) {


    fs.readFile( './assets/css' + pathname, 'utf8',function (err, data) {

        if ( err ) {
            console.log('css not found\n');
            console.log('./assets/css' + pathname);
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();

    });
};





exports.getCss = getCss;

exports.render = render;