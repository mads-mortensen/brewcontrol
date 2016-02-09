var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Component = mongoose.model('Component');

// GET
router.get('/', function(req, res, next) {
	Component.find({}, function(err, components) {
		res.send(components);
	});
});

router.get('/:id', function(req, res, next) {
	Component.findOne({'_id' : req.params.id}, function(err, component) {
		res.send(component);
	});
});

// GET all with beer_id
router.get('/beer/:id', function(req, res, next) {
	Component.find({beer_id: req.params.id}, function(err, components) {
		res.send(components)
	});
});

// DELETE
router.delete('/', function(req, res, next) {
	if (req._body) {
		Component.findOne({ _id : req.body._id }, function (err, component) {
			if (component) {	
				component.remove(function(err) {
					if (err) {
						console.log(err);
						res.send(false);
					}
					else {
						res.send(true);
					}	
				});
			}
		});
	}
	else {
		res.send(false);
	}
});

// CREATE and UPDATE
router.put('/', function(req, res, next) {	
	if (req._body) {
		var createNewComponent = false;
		if (req.body._id) {
			Component.findOne({'_id' : req.body._id}, function (err, old_component) {
				if (old_component!=null) {
					// update
					var new_component = req.body;

					// TODO: this is stupid :/
					for (prop in new_component) {
						old_component[prop] = new_component[prop];
					};
					
					old_component.save(function(err, component) {
						if (err) {
							console.log(err);
							res.send(false);
						}
						else {
							res.send(component);
						}
					});
				}
				else {
					createNewComponent = true;
				}
			});
		}
		else {
			createNewComponent = true;
		}
		
		if (createNewComponent) {
			var component = new Component(req.body).save(function(err, component) {
				if (err) {
					console.log(err);
					res.send(false);
				}
				else {
					res.send(component);
				}
			});
		}
	}
	else {
		res.send(false);
	}
});

module.exports = router;
