var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respondo con algo');
});

router.get('/sites', function(req, res, next) {

  const response = { a:1,b:2};
  res.json(response);
});

module.exports = router;
