var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

//add middleware test
var webpackMiddleware = require("webpack-dev-middleware");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackCompiler = webpack(webpackConfig);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

if (app.get('env') === 'development') {
    // middleware test config start
    app.use(webpackMiddleware(webpackCompiler,{
        // all options optional

        noInfo: false,
        // display no info to console (only warnings and errors)

        quiet: false,
        // display nothing to the console

        lazy: false,
        //true --  switch into lazy mode
        // that means no watching, but recompilation on every request

        watchOptions: {
            aggregateTimeout: 100,
            poll: true
        },
        // watch options (only lazy: false)

        publicPath: "/build/",
        // public path to bind the middleware to
        // use the same as in webpack

        headers: { "X-Custom-Header": "yes" },
        // custom headers

        stats: {
            colors: true
        }
        // options for formating the statistics
    }

    ));

}
//middleware end

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
