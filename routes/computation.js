var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
  // Check if x is provided as a query parameter, otherwise generate random value
  var x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
  
  // Apply Math.log() function (based on student ID ending in 3)
  var y = Math.log(x);
  
  // Format the response string
  var response = `Math.log applied to ${x} is ${y}`;
  
  res.send(response);
});

module.exports = router;
