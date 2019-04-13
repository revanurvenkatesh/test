var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-2'});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
    return;
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(process.env.port || 3001);
module.exports = app;