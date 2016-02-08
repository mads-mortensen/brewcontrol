var Beers = function() {
	var self = this;
	self.Beer = require('../models/Beer');
	self.beers = [];
	self.beer_headers = [];
	self.beer = function() { return self.beers[0] };
	self.beer_headers_ignore = ['_id', '__v'];
	// Fetch all beers -> instatiate beer objects -> save in this.beers ->  save headers in this.beer_headers
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
			method: 'GET',
			dataType: 'JSON',
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
				if (self.beer_headers_ignore.indexOf(name) == -1) self.beer_headers.push(name);
			}
		}
	}
	// Fetch one beer with id 'id' -> save beer to self.beers
	self.loadOneBeer = function(id) {
		return $.ajax({
			method: 'GET',
			dataType: 'JSON',
			url: '/beers/' + id,
			success: function(data) {
				self.beers[0] = new self.Beer(data);
				return self.beers[0];
			}
		})
	}
	// Create a new beer -> Save it
	self.createNewBeer = function() {
		var new_beer = new self.Beer({name: 'new beer'});
		return new_beer.save();
	}
	// Save all beers in this.beers
	self.saveAllBeers = function() {
		$(self.beers).each(function(i, beer) {
			beer.save();	
		})
	}
}
module.exports = new Beers();
