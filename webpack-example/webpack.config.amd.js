var path = require("path");
module.exports = {
    entry: "./example.amd.js",
    output: {
        path: path.join(__dirname, "amd"),
        filename: "bundle.js"
    },
    devtool: 'sourcemap'
};
