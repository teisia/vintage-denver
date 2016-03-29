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

router.get('/', function(req, res) {
  neighborhoods().select().then(function(result) {
    res.render('neighborhoods/index', {neighborhoods: result});
  })
});

router.get('/:id', function(req, res) {
  neighborhoods().where('id', req.params.id).first().then(function(result) {
    stores().where('neighborhood_id', req.params.id).then(function(result2) {
      res.render('neighborhoods/show', {neighborhoods: result, stores: result2});
    })
  })
})

module.exports = router;
