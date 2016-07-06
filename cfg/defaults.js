'use strict';
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

function getDefaultModules() {
    return {
        // preLoaders: [{
        //     test: /\.(js|jsx)$/,
        //     include: srcPath,
        //     loader: 'eslint-loader'
        // }],
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.sass/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader'
        }, {
            test: /\.styl/,
            loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(mp4|ogg)$/,
            loader: 'file-loader'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    };
}
module.exports = {
    srcPath: srcPath,
    publicPath: '/assets/',
    port: dfltPort,
    getDefaultModules: getDefaultModules,
    postcss: function() {
        return [require('autoprefixer')];
    }
};
