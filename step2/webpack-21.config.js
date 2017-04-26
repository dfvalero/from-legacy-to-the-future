'use strict';

var path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        '21': './js/21.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            'jquery': path.resolve(__dirname, 'node_modules/jquery/src/jquery')
        }
    }
};