'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './ex/index.js',
    outpu: {
        path: path.join(__dirname, 'public'),
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}