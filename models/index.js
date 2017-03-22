var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
let Day = require('./day');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Day.belongsTo(Hotel);
Day.belongsToMany(Activity, {through: 'plannedActivities'});
// Activity.belongsToMany(Day, {through: 'itinerary'});
Day.belongsToMany(Restaurant, {through: 'plannedRestaurants'});
// Restaurant.belongsToMany(Day, {through: 'dining'});


module.exports = {
	db,
	Place,
	Hotel,
	Restaurant,
	Activity
};
