let router = require('express').Router();
let dayRouter = require('./days');

router.use('/day', dayRouter);

module.exports = router;
