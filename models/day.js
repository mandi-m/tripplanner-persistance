/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');

const Day = db.define('day', {

  number: Sequelize.INTEGER,

})

module.exports = Day;
