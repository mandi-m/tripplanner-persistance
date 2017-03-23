let router = require('express').Router();
let dayRouter = require('./days');

router.use('/days', dayRouter);

module.exports = router;
