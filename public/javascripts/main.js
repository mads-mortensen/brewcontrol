$(function() {
	vue.getAllBeers();
});

// Vue
vue = new Vue({
	el: 'body',
	data: {
		beers: [],
		Beer: Beer
	},
	methods: {
		getAllBeers: function() {
			self = this;
			$.getJSON('/beers/', function(data, error) {
				// TODO: validate
				self.beers.length = 0;
				if (error == "success") {
					$(data).each(function(i, el) {
						self.beers.push(new self.Beer(el));
					});
				}
			});
		},
		createNewBeer: function() {
			var new_beer = new this.Beer({name: 'new beer'});
			new_beer.save(false, this.getAllBeers);
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
