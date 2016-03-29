var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var validate = require('../lib/validations');

function stores() {
  return knex('stores');
};

function neighborhoods() {
  return knex('neighborhoods');
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
    stores().where('neighborhood_id', result.neighborhood_id).first().then(function(result2) {
      neighborhoods().where('id', result.neighborhood_id).first().then(function(result3) {
        res.render('stores/show', {stores: result, neighborhoods: result3});
      })
    })
  })
});

router.get('/:id/edit', function(req, res) {
  stores().where('id', req.params.id).first().then(function(result) {
    stores().where('neighborhood_id', result.neighborhood_id).first().then(function(result2) {
      neighborhoods().where('id', result.neighborhood_id).first().then(function(result3) {
        res.render('stores/edit', {stores: result, neighborhoods: result3});
      })
    })
  })
});

router.post('/:id', function(req, res) {
  stores().where('id', req.params.id).update(req.body).then(function(result) {
    res.redirect('/stores');
  })
});

router.get('/:id/delete', function(req, res) {
  stores().where('id', req.params.id).del().then(function(result) {
    res.redirect('/stores');
  })
});

module.exports = router;
