var url = require("url");
var fs = require("fs");
var path = require("path");
var mime = {
    "": "application/json;charset=utf-8",
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
}


var Api = function() {};

var welcome_file = "index.html"

Api.prototype.dispatch = function(request, response, root_dir) {
    response.setHeader("Server", "Pengzhen Server");
    response.setHeader('Accept-Ranges', 'bytes');
    console.log("[api] " + request.method + " " + request.url);

    var pathname = url.parse(request.url).pathname;
    if (pathname.slice(-1) === "/") {
        pathname = pathname + welcome_file;
    }

    var realPath = path.join(root_dir,
        path.normalize(pathname.replace(/\.\./g, "")));

    var pathHandle = function(realPath) {
        fs.stat(realPath, function(err, stats) {
            if (err) {
                response.writeHead(404, "Not Found", {
                    'Content-Type': 'text/plain'
                });
                response.write("404\n\nThis request URL " + pathname + " was not found on this server.");
                response.end();
            } else {
                if (stats.isDirectory()) {
                    realPath = path.join(realPath, "/", welcome_file);
                    pathHandle(realPath);
                } else {
                    var ext = path.extname(realPath);
                    ext = ext ? ext.slice(1) : ''; //unknow
                    var contentType = mime[ext] || "text/plain";
                    response.setHeader("Content-Type", contentType);
                    response.setHeader('Content-Length', stats.size);

                    var lastModified = stats.mtime.toUTCString();
                    var ifModifiedSince = "If-Modified-Since".toLowerCase();
                    response.setHeader("Last-Modified", lastModified);



                    if (request.headers[ifModifiedSince] && lastModified == request.headers[ifModifiedSince]) {
                        response.writeHead(304, "Not Modified");
                        response.end();
                    } else {
                        var compressHandle = function(raw, statusCode, reasonPhrase) {
                            var stream = raw;
                            var acceptEncoding = request.headers['accept-encoding'] || "";

                            response.writeHead(statusCode, reasonPhrase);
                            stream.pipe(response);
                        };

                        var raw = fs.createReadStream(realPath);
                        compressHandle(raw, 200);

                    }
                }
            }
        });
    };

    pathHandle(realPath);
};

exports.Api = Api;
