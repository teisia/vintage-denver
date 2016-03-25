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

router.get('/:id', function(req, res) {
  stores().where('id', req.params.id).first().then(function(result) {
    res.render('stores/show', {stores: result});
  })
});

module.exports = router;
