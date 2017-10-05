const mongoose = require('mongoose'),
  express = require('express'),
  app = express(),
  db = require('./models');



app.listen(3000, function() {
  console.log('listening on port 3000');
})
