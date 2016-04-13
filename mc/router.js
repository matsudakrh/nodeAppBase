


var router = function (handle, pathname, req, res) {

    if ( pathname.indexOf('.css') != -1 ) {
        handle.getCss(req, res, pathname);
        return;
    } else if ( pathname.indexOf('.js') != -1 ) {
        handle.getJs(req, res, pathname);
        return;
    } else if ( pathname.indexOf('.jpg') != -1 ) {
        handle.getImg(req, res, pathname, 'jpeg');
        return;
    } else if ( pathname.indexOf('.png') != -1 ) {
        handle.getImg(req, res, pathname, 'png');
        return;
    } else if ( pathname.indexOf('.gif') != -1 ) {
        handle.getImg(req, res, pathname, 'gif');
        return;
    } else if ( typeof handle[pathname] === 'function' ) {
        handle[pathname](req, res, pathname);
        return;
    }

    handle.render(req, res, pathname);

};

exports.router = router;