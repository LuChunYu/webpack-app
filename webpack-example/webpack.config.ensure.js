var path = require("path");
module.exports = {
    entry: "./example.ensure.js",
    output: {
        path: path.join(__dirname, "ensure"),
        publicPath: "/ensure/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    devtool: 'sourcemap'
};
