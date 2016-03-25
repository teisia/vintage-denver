var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function stores() {
  return knex('stores');
};

router.get('/', function(req, res, next) {
  stores().select().then(function(result) {
   res.render('stores/index', {stores: result});
 })
});

module.exports = router;
