var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var validate = require('../lib/validations');

function stores() {
  return knex('stores');
};

router.get('/', function(req, res, next) {
  stores().select().then(function(result) {
   res.render('stores/index', {stores: result});
 })
});

router.get('/new', function(req, res) {
    res.render('stores/new', {errors:[]});
});

router.post('/', function(req, res) {
  var errors=[];
  errors.push(validate.nameIsNotBlank(req.body.name));
  errors.push(validate.addressIsNotBlank(req.body.street1));
  errors.push(validate.neighborhoodIsNotBlank(req.body.neighborhood_id));
  errors.push(validate.zipIsNotBlank(req.body.zip));
  errors.push(validate.bioIsNotBlank(req.body.bio));
    errors = errors.filter(function(error) {
      return error.length;
    })
     if (errors.length) {
       res.render('stores/new', {errors: errors, info: req.body})
     } else {
     stores().insert(req.body).then(function() {
       res.redirect('/stores');
    })
  }
});

router.get('/:id', function(req, res) {
  stores().where('id', req.params.id).first().then(function(result) {
    res.render('stores/show', {stores: result});
  })
});

module.exports = router;
