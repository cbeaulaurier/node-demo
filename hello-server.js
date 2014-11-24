/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

//var http = require('http');
//var server = http.createServer(function(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World from Cassandra!\n');
//});
//
//server.listen(8080, function() {
//   console.log('Server is listening at http://localhost:8080');
//});

var express = require('express');
var app = express();

// get on root resource
app. get('/', function(req, res) {
    res.send('Hello World!');
});

// get on foo resource
app.get('/foo', function(req, res) {
    res.send('You requested foo!');
});

app.listen(8080, function() {
    console.log('Listening at http://localhost:8080');
});