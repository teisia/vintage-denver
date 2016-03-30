var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var request = require('request');
var validate = require('../lib/validations');

function stores() {
  return knex('stores');
};

function neighborhoods() {
  return knex('neighborhoods');
};

function reviews() {
  return knex('reviews');
};

router.get('/', function(req, res) {
  neighborhoods().select().then(function(result) {
    res.render('neighborhoods/index', {neighborhoods: result});
  })
});

router.get('/:id', function(req, res) {
  neighborhoods().where('id', req.params.id).first().then(function(result) {
    stores().where('neighborhood_id', req.params.id).then(function(result2) {
      reviews().where('store_id', req.params.id).then(function(result3) {
        res.render('neighborhoods/show', {neighborhoods: result, stores: result2, reviews: result3});
      })
    })
  })
})

module.exports = router;
