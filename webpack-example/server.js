var express = require('express');
var app = express();

require('./webpackdev.server.js')(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/server.html');
});

app.listen(8980);

