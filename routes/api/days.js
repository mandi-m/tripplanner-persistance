let router = require('express').Router();
let path = require('path');
let Day = require('/Users/strangefrond/fsa/tripplanner-persistance/models/day');
//
//retrieving a day
router.get('/:day/',function(req,res,next){
  res.send('works');
});

//updating a day
router.put('/:day/', function(req,res,next){

})

//adding a day
router.post('/', function(req,res,next){
  Day.create({number: req.body.number})
  .then(function(){
    res.status(201);
  })
  .catch(next)
})

//adding a booking to a day
router.post('/:day/:genre', function(req,res,next){
  console.log(req.params.day);
  res.send("You're adding a booking to a day!");
})

//deleting a day
router.delete('/:day/', function(req,res,next){

})

module.exports = router;
