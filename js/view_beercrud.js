var Beer = require('./models/Beer.js');

// Vue
vue = new Vue({
	el: 'body',
	ready: function() {
		this.getAllBeers();
	},
	data: {
		beers: [],
		beer_headers: [],
		beer_headers_ignore: ['_id', '__v'],
		Beer: Beer // Beer model
	},
	computed: {
		isThisPage: function(path) {
			return true;
		}
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