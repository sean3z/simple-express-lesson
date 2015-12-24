var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// storage of avengers
var avengers = {
	Thor: {
		identity: 'Jane Foster',
		location: 'Asgard'
	},
	'Captain America': {
		identity: 'Sam Wilson',
		location: 'New York City, New York'
	},
	'Iron Man': {
		identity: 'Anthony Stark',
		location: 'Long Island, New York'
	},
	'Spider-Man': {
		identity: 'Miles Morales',
		location: 'Manhattan, New York'
	}
};

// return information about the avenger
app.get('/avenger/:hero', function(req, res) {
	res.send(avengers[req.params.hero]);
});

// update information about the avenger
app.post('/avenger/:hero', function(req, res) {
	avengers[req.params.hero] = req.body;
	res.send(200);
});

// create new avenger
app.put('/avenger/:hero', function(req, res) {
	avengers[req.params.hero] = req.body;
	res.send(200);
});

// delete existing avenger
app.delete('/avenger/:hero', function(req, res) {
	avengers[req.params.hero] = null;
	res.send(200);
});

app.listen(8080, function() {
	console.log('Server started on http://localhost:8080');
});