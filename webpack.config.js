const webpack = require ('webpack');

const config = {
    context: __dirname + '/src',
    entry: {
        app: './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: './assets/bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist'
    }
}

module.exports = config;