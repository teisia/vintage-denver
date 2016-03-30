var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var request = require('request');
var validate = require('../lib/validations');

function stores() {
  return knex('stores');
};

function reviews() {
  return knex('reviews');
};

router.get('/:id/reviews/new', function(req, res) {
  stores().where('id', req.params.id).first().then(function(result) {
    res.render('reviews/new', {stores: result});
  })
});

router.post('/:id/reviews', function(req, res) {
  var errors=[];
  errors.push(validate.nameIsNotBlank(req.body.name));
  errors.push(validate.dateIsNotBlank(req.body.date));
  errors.push(validate.reviewIsNotBlank(req.body.review));
    errors = errors.filter(function(error) {
      return error.length;
    })
      if (errors.length) {
      stores().select().first().then(function(result) {
        reviews().select().then(function(result2) {
        res.render('reviews/new', {errors: errors, stores: result, reviews: result2})
          })
        })
      } else {
      reviews().insert(req.body).then(function(result) {
        res.redirect('/stores/'+req.params.id);
    })
  }
})

router.get('/:id/reviews/:reviewid/edit', function(req, res) {
  stores().where('id', req.params.id).first().then(function(result) {
    reviews().where('id', req.params.reviewid).first().then(function(result2) {
      res.render('reviews/edit', {stores: result, reviews: result2});
    })
  })
});

router.post('/:id/reviews/:reviewid', function(req, res){
  reviews().where('id', req.params.reviewid).update(req.body).then(function(result){
    res.redirect('/stores/'+req.params.id);
   })
});

router.get('/:id/reviews/:reviewid/delete', function(req, res) {
  reviews().where('id', req.params.reviewid).del().then(function(result){
    res.redirect('/stores/'+req.params.id);
  })
});

module.exports = router;
