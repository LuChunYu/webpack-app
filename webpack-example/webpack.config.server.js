var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/page/main.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://10.16.15.199:8080'
    ],
    output: {
        path: __dirname + '/assets/',
        filename: '[name].js',
        chunkFilename: "[id].js",
        publicPath: "http://10.16.15.199:8080/assets/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
        ]
    },
    devtool: 'sourcemap',
    resolve: {
        extensions: ['', '.js', '.less']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    recordsPath: __dirname + '/assets/main.json'
};
