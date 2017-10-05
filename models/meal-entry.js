const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  numServings: { type: Number, default: 0 },
  food: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  }
});

const entrySchema = new mongoose.Schema({
  courses: [{ type: courseSchema, required: true }]
});

module.exports = {
  MealEntry: mongoose.model('MealEntry', entrySchema),
  Course: mongoose.model('Course', courseSchema)
}
