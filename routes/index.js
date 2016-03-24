var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
    res.render('stores/index');
});

module.exports = router;
