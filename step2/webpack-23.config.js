'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        '23': './js/23.js'
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
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};