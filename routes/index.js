var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/beertestcrud/', function(req, res, next) {
	res.render('beertestcrud');
});

router.get('/beer/:id', function(req, res, next) {
	res.render('beer', {beer_id : req.params.id});
});

module.exports = router;
