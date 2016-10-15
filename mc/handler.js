
var fs = require('fs');
var jade = require('jade');
var http = require('http');


var render = function (req, res, pathname) {


    var path = pathname;

    if ( path.slice(-1) === '/' ) {
        path = pathname + 'index';
    }

    // console.log(req['method']);
    // console.log(res);

    fs.readFile( './views' + path + '.jade', 'utf8',function (err, data) {

        if ( err ) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            console.log('./views' + path );
            console.log('404 Not Found!');
            res.write('404 not found');
            res.end();
            return;
        }

        var template = jade.compile(data);
        var compiled = template({name: 'hoge'});

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(compiled);
        res.end();

    });

};


var errorRender = function (req, res, pathname) {

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

var getJs = function (req, res, pathname) {

    fs.readFile( './assets/javascript' + pathname, 'utf8',function (err, data) {

        if ( err ) {
            console.log('javascript not found\n');
            console.log('./assets/javascript' + pathname);
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();

    });

};


var getImg = function (req, res, pathname, type) {

    fs.readFile( './assets/images' + pathname, function (err, data) {

        if ( err ) {
            console.log('image not found\n');
            console.log('./assets/images' + pathname);
            return;
        }
        res.writeHead(200, {'Content-Type': 'image/' + type});
        res.write(data);
        res.end();

    });

};

var getData = function ( url, savePath, callback ) {


    var outfile = fs.createWriteStream(savePath);


    http.get( url, function ( data ) {

        data.pipe(outfile);
        data.on( 'end', function () {
            outfile.close();
            callback();
        });

    });

};



var returnJSON = function ( req, res, pathname ) {


    res.writeHead(200, {'Content-Type': 'application/json'});

    var data = {
        id: 2,
        message: 'こんにちは！'
    };

    var json = JSON.stringify(data);

    res.write(json);
    res.end();

};




var aozora = function ( req, res, pathname ) {

    render( req, res, pathname );

    getData(
        'http://www.aozora.gr.jp/cards/001047/card42924.html',
        'downloads/ienakiko01.html',
        function () {
        console.log('complete');
    });

    getData(
        'http://www.aozora.gr.jp/cards/001047/card42925.html',
        'downloads/ienakiko02.html',
        function () {
        console.log('complete');
    });



};




exports.getCss = getCss;
exports.getJs = getJs;
exports.getImg = getImg;

exports.render = render;


exports.getData = getData;
exports.aozora = aozora;