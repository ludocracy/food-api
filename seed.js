const db = require('./models');

const foodArray = [
  {
    name: 'haggis',
    imageUrl: '',
    tags: ['Scottish', 'meat', 'exotic'],
    servingSize: 400,
    servingUnit: 'grams',
    nutrition: {
      calories: 1000,
      totalFat: 200,
      sodium: 100,
      sugar: 10,
      protein: 300,
      fiber: 0
    }
  },
  {
    name: "shepherd's pie",
    imageUrl: '',
    tags: ['Scottish', 'meat', 'mashed potatoes'],
    servingSize: 600,
    servingUnit: 'grams',
    nutrition: {
      calories: 1500,
      totalFat: 100,
      sodium: 80,
      sugar: 50,
      protein: 200,
      fiber: 20
    }
  },
  {
    name: 'scottish ale',
    imageUrl: '',
    tags: ['Scottish', 'beer', 'alcohol'],
    servingSize: 200,
    servingUnit: 'grams',
    nutrition: {
      calories: 300,
      totalFat: 0,
      sodium: 0,
      sugar: 300,
      protein: 0,
      fiber: 0
    }
  },
]
db.Food.remove({}, function(err, foods) {
  db.MealTracker.remove({}, function(err, trackers) {
    db.MealEntry.remove({}, function(err, entries) {
      let tracker = new db.MealTracker({
          name: 'Scottish paleo'
        });

      for(let i=0; i < 5; i++) {
        let mealDay = new db.MealDay({ date: `2001-01-0${i}`});
        for(let j=0; j < 3; j++) {
          let mealEntry = new db.MealEntry({});
          foodArray.forEach(foodData => {
            let food = new db.Food(foodData);
            food.save();
            let course = new db.Course({
              numServings: 1,
              food: food
            });
            mealEntry.courses.push(course);
            mealEntry.save();
          });
          mealDay.meals.push(mealEntry);
        }
        tracker.mealDays.push(mealDay);
      }

      tracker.save(function(err, savedTracker) {
        console.log('saved meal tracker');
        process.exit();
      });
    });
  });
});
