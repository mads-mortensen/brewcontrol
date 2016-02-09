var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Beer = mongoose.model('Beer');

// GET
router.get('/', function(req, res, next) {
	Beer.find({}, function(err, beers) {
		res.send(beers);
	});
});

router.get('/:id', function(req, res, next) {
	Beer.findOne({'_id' : req.params.id}, function(err, beer) {
		res.send(beer);
	});
});

// DELETE
router.delete('/', function(req, res, next) {
	if (req._body) {
		Beer.findOne({ _id : req.body._id }, function (err, beer) {			
			beer.remove(function(err) {
				if (err) {
					console.log(err);
					res.send(false);
				}
				else {
					res.send(true);
				}	
			});
		});
	}
	else {
		res.send(false);
	}
});

// CREATE and UPDATE
router.put('/', function(req, res, next) {	
	if (req._body) {
		var createNewBeer = false;
		if (req.body._id) {
			Beer.findOne({'_id' : req.body._id}, function (err, old_beer) {
				if (old_beer!=null) {
					// update
					var new_beer = req.body;

					// TODO: this is stupid :/
					for (prop in new_beer) {
						old_beer[prop] = new_beer[prop];
					};
					
					old_beer.save(function(err, beer) {
						if (err) {
							console.log(err);
							res.send(false);
						}
						else {
							res.send(beer);
						}
					});
				}
				else {
					createNewBeer = true;
				}
			});
		}
		else {
			createNewBeer = true;
		}
		
		if (createNewBeer) {
			var beer = new Beer(req.body).save(function(err, beer) {
				if (err) {
					console.log(err);
					res.send(false);
				}
				else {
					res.send(beer);
				}
			});
		}
	}
	else {
		res.send(false);
	}
});

module.exports = router;
