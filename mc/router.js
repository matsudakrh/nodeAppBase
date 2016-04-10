


var router = function (handle, pathname, req, res) {

    if ( pathname.indexOf('.css') != -1  ) {
        console.log('This request is css.');
        console.log(req);
        handle.getCss(req, res, pathname);
        return;
    } else if ( pathname.indexOf('.js') != -1 ) {
        console.log('This request is js.');
        return;
    } else if ( typeof handle[pathname] === 'function' ) {
        handle[pathname](req, res, pathname);
        return;
    }

    handle.render(req, res, pathname);

    //
    //if ( typeof handle[pathname] === 'function') {
    //    handle[pathname](req, res, pathname);
    //
    ////
    ////} else if ( pathname.indexof('css') != 0 ) {
    ////    handle.getCss(req, res, pathname);
    //}
    //else {
    //    res.writeHead(200, {'Content-Type': 'text/plain'});
    //    res.write('404 Not Found\n');
    //    res.write(pathname);
    //    res.end();
    //}

};

exports.router = router;