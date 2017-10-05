const mongoose = require('mongoose'),
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  db = require('./models');

app.use(bodyParser.json());

// routes
// TODO move all these callbacks to a routes dir
app.get('/', function(req, res) {
  res.send('you are at root');
});

app.get('/trackers', function(req, res) {
  db.MealTracker.find({}, function(err, trackers) {
    if(err) {
      res.status(500).send('error retrieving trackers');
    } else {
      res.json(trackers);
    }
  })
});

app.get('/meals', function(req, res) {
  db.MealEntry.find({}, function(err, entries) {
    if(err) {
      res.status(500).send('error retrieving meal entries');
    } else {
      res.json(entries);
    }
  })
})

app.get('/foods', function(req, res) {
  db.Food.find({}, function(err, foods) {
    if(err) {
      res.status(500).send('error retrieving foods');
    } else {
      res.json(foods);
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
