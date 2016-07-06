/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');



var http = require("http");
const open = require('open');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
var Api = require("./server_api_define.js").Api;


// -- api server

var api_root_dir = __dirname + "/";
console.log("root_dir : " + api_root_dir)

var api = new Api();
var api_port = parseInt(config.port)+1;
var server = http.createServer();
server.on("request", function(request, response) {
    api.dispatch(request, response, api_root_dir);
});
server.listen(api_port);

var devServer = Object.assign(config.devServer,{
    proxy: {
        '/api/*': {
            target: 'http://localhost:'+api_port,
            secure: false
        }
    }
})
new WebpackDevServer(webpack(config), devServer)
    .listen(config.port, 'localhost', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + config.port);
        console.log('Opening your system browser...');
        open('http://localhost:' + config.port + '/webpack-dev-server/');
    });
