module.exports = function() {
	var self = this;
	self.Beer = require('../models/Beer');
	self.beers = [];
	self.beer_headers = [];
	self.beer_headers_ignore = ['_id', '__v'];
	self.beer = () => self.beers[0];
	self.lastBeer = () => self.beers[self.beers.length-1];
	// Fetch all beers -> instatiate beer objects -> save in this.beers ->  save headers in this.beer_headers
	self.setupBeers = () => 
		self.fetchBeers()
			.then(beers => {
				self.addBeers(beers);
				self.setBeerHeaders();
			})
	self.fetchBeers = () => 
		$.ajax({
			method: 'GET',
			dataType: 'JSON',
			url: '/beers/'
		})
	self.addBeers = beers => {
		self.beers.length = 0;	
		$(beers).each((i, el) => self.beers.push(new self.Beer(el)))
	}
	self.setBeerHeaders = () => {
		self.beer_headers.length = 0;
		if (self.beers.length > 0) {
			for (var prop in self.beers[0].data) {
				if (self.beer_headers_ignore.indexOf(prop) == -1)
					self.beer_headers.push(prop);
			}
		}
	}
	// Fetch one beer with id 'id' -> save beer to self.beers
	self.loadOneBeer = id =>
		$.ajax({
			method: 'GET',
			dataType: 'JSON',
			url: '/beers/' + id,
			success: data => self.beers[0] = new self.Beer(data)
		})
	// Create a new beer -> Save it
	self.createNewBeer = () => 
		(new self.Beer({name: 'new beer'})).save();
	// Save all beers in this.beers
	self.saveAllBeers = () => {
		$(self.beers).each((i, beer) => beer.save())
	}
}
