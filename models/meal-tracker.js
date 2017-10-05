const mongoose = require('mongoose');
const MealEntry = require('./meal-entry');

const mealDaySchema = new mongoose.Schema({
  date: { type: String, required: true },
  isCheatDay: { type: Boolean, default: false },
  meals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MealEntry'
  }]
});

const trackerSchema = new mongoose.Schema({
  name: String,
  mealDays: [mealDaySchema]
});

module.exports = {
  MealTracker: mongoose.model('MealTracker', trackerSchema),
  MealDay: mongoose.model('MealDay', mealDaySchema)
};
