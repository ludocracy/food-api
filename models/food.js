const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
  calories: Number,
  totalFat: Number,
  sodium: Number,
  sugar: Number,
  protein: Number,
  fiber: Number
});

const foodSchema = new mongoose.Schema({
  name: String,
  type: String,
  imageUrl: String,
  tags: [String],
  servingSize: Number,
  servingUnit: String,
  nutrition: nutritionSchema
});

exports = {
  Food: mongoose.model('Food', foodSchema),
  Nutrition: mongoose.model('Nutrition', nutritionSchema)
}
