let router = require('express').Router();

//retrieving a day
router.get('/:day/',function(req,res,next){
  res.send('works');
});

//updating a day
router.put('/:day/', function(req,res,next){

})

//adding a day
router.post('/:day/', function(req,res,next){
  console.log(req.params.day);
  res.send("You're a winner!");
})

//deleting a day
router.delete('/:day/', function(req,res,next){

})

module.exports = router;
