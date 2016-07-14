'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
let npmBase = path.join(__dirname, '../node_modules');
let additionalPaths = [ path.join(npmBase, 'blank-ui') ];
// let additionalPaths = [];

module.exports = {
    additionalPaths: additionalPaths,
    port: defaultSettings.port,
    debug: true,
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/../dist/assets'),
        filename: 'app.js',
        publicPath: defaultSettings.publicPath
    },
    devServer: {
        contentBase: './src/',
        historyApiFallback: true,
        hot: true,
        port: defaultSettings.port,
        publicPath: defaultSettings.publicPath,
        noInfo: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            components: `${defaultSettings.srcPath}/components/`,
            ['blank-ui/lib']: `${defaultSettings.srcPath}/components/Components/`,
            actions: `${defaultSettings.srcPath}/actions/`,
            store: `${defaultSettings.srcPath}/store/`,
            images: `${defaultSettings.srcPath}/images/`,
            utils: `${defaultSettings.srcPath}/utils/`
        }
    },
    module: {},
    postcss: defaultSettings.postcss
};
