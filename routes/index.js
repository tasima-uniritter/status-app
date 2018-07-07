var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var version = { version: '1.0.0', status: 'OK', name: 'topi-status-real' }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(version, null, 2));
});

module.exports = router;