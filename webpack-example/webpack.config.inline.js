var path = require("path");
module.exports = {
    entry: "./src/page/main.js",
    output: {
        path: __dirname + '/assets/',
        filename: "[name].js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    devtool: 'sourcemap'
};
