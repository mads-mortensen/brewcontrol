var Beers = function() {
	var self = this;
	self.Beer = require('../models/Beer');
	self.beers = [];
	self.beer_headers = [];
	self.loadAllBeers = function() {
		self.setupBeers()
			.then(self.setupComponents)
			.then(() => { self.ready = true; })
	}
	self.setupBeers = function() {
		return self.fetchBeers().then(function(beers) {
			self.addBeers(beers);
			self.setBeerHeaders();
		})
	}
	self.fetchBeers = function() {
		return $.ajax({
			dataType: "JSON",
			url: '/beers/'
		})
	}
	self.addBeers = function(beers) {
		self.beers.length = 0;	
		$(beers).each(function(i, el) {
			self.beers.push(new self.Beer(el));
		})
	}
	self.setBeerHeaders = function() {
		self.beer_headers.length = 0;
		if (self.beers.length > 0) {
			for (name in self.beers[0].data) {
				if (self.beer_headers_ignore.indexOf(name) == -1) this.beer_headers.push(name);
			}
		}
	}
	self.createNewBeer = function() {
		var new_beer = new this.Beer({name: 'new beer'});
		new_beer.save().then(this.setupBeers);
	}
	self.saveAllBeers = function() {
		$(self.beers).each(function(i, beer) {
			beer.save();	
		})
	}
}
