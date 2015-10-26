var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'public', 'build');
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/page/index.js',
        other: './src/page/moduleB.js',
        test: './src/page/pluginTest.js'
    },
    output: {
        path: buildPath,
        publicPath: '/build/',
        filename: '[name].js',
        chunkFilename: "[id].js"
    },
    resolve: {
        extensions: ['', '.js', '.less', '.css'],
        alias: []
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader'},
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', "css-loader!less-loader?indentedSyntax=true&sourceMap=true")},
            //{ test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
			{ test: /\.png$/, loader: "url-loader?limit=10000&name=img/[name].[ext]" },
			{ test: /\.jpg$/, loader: "url-loader?limit=10000" },
            {test: /\.jade$/, loader: 'html-loader!jade-loader'},
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    },
    debug: true,
    devtool: 'sourcemap',
    recordsPath: __dirname + '/build/main.json',
    plugins: [
        definePlugin,
        commonsPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles/[name].css",{
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './views/pluginTest.html',
            inject: 'body', 
            chunks: ['test']
        })
    ]

};
