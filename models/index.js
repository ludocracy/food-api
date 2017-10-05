const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.openUri(process.env.DB_CONN, {}, (err, conn) => {
  if(err) { console.log(err); }
});

const foodModels = require('./food');
const trackerModels = require('./meal-tracker');
const mealModels = require('./meal-entry');

module.exports = {
  MealTracker: trackerModels.MealTracker,
  MealDay: trackerModels.MealDay,
  MealEntry: mealModels.MealEntry,
  Course: mealModels.Course,
  Food: foodModels.Food,
  Nutrition: foodModels.Nutrition,
};
