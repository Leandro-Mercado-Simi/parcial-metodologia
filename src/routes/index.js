var express = require('express');
var router = express.Router();
// No cree un controller para esto
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soy la Metro' });
});

module.exports = router;
