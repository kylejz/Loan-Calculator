'use strict';

var port = 9001;
var cors = require('cors');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/interest_rate', function(req, res) {
	var randomNum = (Math.random() * 20).toFixed(2);
	console.log(randomNum);
	res.json(randomNum);
})

app.listen(port, function() {
	console.log('handoff to clinton ', port + 'is')
})