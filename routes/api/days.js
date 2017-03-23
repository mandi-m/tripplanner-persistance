let router = require('express').Router();
let path = require('path');
let Day = require('../../models/day');
let Hotel = require('../../models/hotel');

//retrieving a day
router.get('/:day/',function(req,res,next){
  res.send('works');
});

//updating a day
// router.put('/:day/', function(req,res,next){

// })

//adding a day
router.post('/', function(req,res,next){
  Day.create({number: req.body.number})
  .then(function(){
    res.status(201).send();
  })
  .catch(next)
})


router.post('/:dayId/hotel', function(req,res,next){

  var currentDay;

  Day.find({
    where: {
      number: req.params.dayId
    }
  })
  .then(function(day){
    currentDay = day;
    return Hotel.find({
      where: {
        name: req.body.name
      }
    })
  })
  .then(function(hotel){
    console.log(currentDay, hotel.name);
    currentDay.setHotel(hotel);
    currentDay.save();
    res.status(201).send();
  })
  .catch(next)
})


module.exports = router;


// Day.belongsTo(Hotel);
// Day.belongsToMany(Activity, {through: 'plannedActivities'});
// Day.belongsToMany(Restaurant, {through: 'plannedRestaurants'});
