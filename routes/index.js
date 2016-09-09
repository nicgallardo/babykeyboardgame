var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SimpliEd'});
});

router.get('/toddler-keyboard', function(req, res, next) {
  res.render('toddler-keyboard', { title: 'SimpliEd - Toddler Keyboard' });
});

router.get('/color-match', function(req, res, next) {
  res.render('color-match', { title: 'SimpliEd - Color Match' });
});

module.exports = router;
