var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var request = require('request');
var validate = require('../lib/validations');

function reviews() {
  return knex('reviews');
}

router.get('/new', function(req, res) {
  res.render('reviews/new');
});

module.exports = router;
