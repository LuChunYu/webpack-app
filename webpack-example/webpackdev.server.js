var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.server.js');
var proxy = require('proxy-middleware');
var url = require('url');

module.exports = function(app) {
  // 使用8180端口
  app.use('/assets/', proxy(url.parse('http://localhost:8080/assets/')));

  var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    proxy: {
        "*": [{target: 'http://10.16.15.199:8080'}]
    },
    publicPath: '/assets/',
    historyApiFallback: true,
    stats: { colors: true }
  }).listen(8080, function(err, result) {
    if(err){
        console.log(err);
    }
    console.log('socketio listen 8080');
  });
};
