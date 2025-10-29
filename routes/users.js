var express = require('express');
var router = express.Router();

var factor = 2;
var current = 25;

/* GET users listing. */
router.get('/', function(req, res, next) {
  current = current * factor;
  res.render('users', { title: 'Users', message: `Current is: ${current}` });
});

module.exports = router;
