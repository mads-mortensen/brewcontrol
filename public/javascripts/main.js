$(function() {
	vue.getAllBeers();
});

// Vue
vue = new Vue({
	el: 'body',
	data: {
		beers: [],
		beer_headers: [],
		beer_headers_ignore: ['_id', '__v'],
		Beer: Beer
	},
	methods: {
		getAllBeers: function() {
			self = this;
			$.ajax({
				dataType: "json",
				url: '/beers/',
				success: function(data, error) {
					// TODO: validate
					self.beers.length = 0;
					if (error == "success") {
						$(data).each(function(i, el) {
							self.beers.push(new self.Beer(el));
						});
						self.setBeerHeaders();
					}
					else {
						// TODO
					}
				},
				timeout: 2000
			}).fail(function(xhr, status) {
				if(status == "timeout") {
					console.error("timed out to API endpoint '/beers/'");
				}
			});
		},
		createNewBeer: function() {
			var new_beer = new this.Beer({name: 'new beer'});
			new_beer.save(false, this.getAllBeers);
		},
		setBeerHeaders: function() {
			this.beer_headers.length = 0;
			if (this.beers.length > 0) {
				for (name in this.beers[0].data) {
					if (this.beer_headers_ignore.indexOf(name) == -1) this.beer_headers.push(name);
				}
			}
		}
	}
});

// TODO: make modular, maybe just require('/Beer.js')
function Beer(data) {
	var self = this;
	this.data = (!data) ? false : data;
	this.save = function(event, callback) {
		$.ajax({
			method: 'PUT',
			url: '/beers/',
			data: self.data
		}).done(function(beer) {
			// TODO: validation
			console.log("saved beer", beer);
			if (beer) self.data = beer;
			if (callback) callback();
		});
	}
	this.delete = function(event, callback) {
		$.ajax({
			method: 'DELETE',
			url: '/beers/',
			data: self.data
		}).done(function(success) {
			// TODO: validation
			if (success) {
				self.data = false;
				if (callback) callback();
			}
		});
	}
}
