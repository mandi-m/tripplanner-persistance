var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
let apiRoutes  = require('./api/');

// router.get('/', function(req, res, next) {
//   Promise.all([
//     Hotel.findAll(),
//     Restaurant.findAll(),
//     Activity.findAll()
//   ])
//   .spread(function(dbHotels, dbRestaurants, dbActivities) {
//     res.render('index', {
//       templateHotels: dbHotels,
//       templateRestaurants: dbRestaurants,
//       templateActivities: dbActivities
//     });
//   })
//   .catch(next);
// });

router.get('/', function(req, res, next) {
  res.render('index');
});



router.get('/:tableName', function(req, res, next) {
  let parsedTable;
  switch (req.params.tableName){
    case 'hotels': parsedTable = Hotel;
    break;
    case 'restaurants': parsedTable = Restaurant;
    break;
    case 'activities': parsedTable = Activity;
    break;
    default: next();
  }

  parsedTable.findAll()
  .then(function(all){
    res.json(all);
  })
  .catch(next)
});

router.use('/', apiRoutes);

module.exports = router;
