const mongoose = require('mongoose'),
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  db = require('./models');

app.use(bodyParser.json());

// routes
app.get('/', function(req, res) {
  res.send('you are at root');
})

app.get('/foods', function(req, res) {
  db.Food.find({}, function(err, foods) {
    res.json(foods);
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000');
})
