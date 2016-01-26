var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/beertestcrud/', function(req, res, next) {
	res.render('beertestcrud');
});

module.exports = router;
