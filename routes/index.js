var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('pages/page_index');
});

router.get('/crud/', function(req, res, next) {
	res.render('pages/page_crud');
});

router.get('/beer/:id', function(req, res, next) {
	res.render('pages/page_beer', {beer_id : req.params.id});
});

module.exports = router;
