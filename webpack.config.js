const webpack = require ('webpack');

const config = {
    context: __dirname + '/src',
    entry: {
        app: './main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: './assets/bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }]
          }
        ]
      }
}

module.exports = config;