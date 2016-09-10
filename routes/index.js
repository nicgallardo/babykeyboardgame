var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toddle'});
});

router.get('/toddler-keyboard', function(req, res, next) {
  res.render('toddler-keyboard', { title: 'Toddle - Toddler Keyboard' });
});

router.get('/color-match', function(req, res, next) {
  res.render('color-match', { title: 'Toddle - Color Match' });
});

router.get('/match-game', function(req, res, next) {
  res.render('match-game', { title: 'Toddle - Match Game' });
});

module.exports = router;
