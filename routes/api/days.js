let router = require('express').Router();
let path = require('path');
let Day = require('../../models/day');
let Hotel = require('../../models/hotel');
let Restaurant = require('../../models/restaurant');

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

router.get('/', function(req,res,next){
  Day.findAll({
    include: [{ all: true}],
    order: [['number']]
  })
  .then(function(allDays){
    res.send(allDays)
  })
  .catch(next)
})


router.post('/:dayNum/hotel', function(req,res,next){

  var currentDay;

  Day.find({
    where: {
      number: req.params.dayNum
    }
  })
  .then(function(day){
    currentDay = day;
    return Hotel.find({
      where: {
        id: req.body.id
      }
    })
  })
  .then(function(hotel){
    currentDay.setHotel(hotel);
    currentDay.save();
    res.status(201).send();
  })
  .catch(next)
})

router.post('/:dayNum/restaurant', function(req,res,next){

  var currentDay;

  Day.find({
    where: {
      number: req.params.dayNum
    }
  })
  .then(function(day){
    currentDay = day;
    return Restaurant.findById(req.body.id)
  })
  .then(function(restaurant){
    currentDay.addRestaurant(restaurant);
    currentDay.save();
    res.status(201).send();
  })
  .catch(next)
})

router.delete('/:dayNum/restaurant', function(req,res,next){

  var currentDay;

  Day.find({
    where: {
      number: req.params.dayNum
    }
  })
  .then(function(day){
    currentDay = day;
    return Restaurant.findById(req.body.id)
  })
  .then(function(restaurant){
    currentDay.removeRestaurant(restaurant);
    currentDay.save();
    res.status(200).send();
  })
  .catch(next)
})


module.exports = router;


// Day.belongsTo(Hotel);
// Day.belongsToMany(Activity, {through: 'plannedActivities'});
// Day.belongsToMany(Restaurant, {through: 'plannedRestaurants'});
