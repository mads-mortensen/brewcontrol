// Models
var Beer = require('./models/Beer');
var Component = require('./models/Component');

// Data
var components_list = require('./data_components_list.js');

// Vue
vue = new Vue({
	el: 'body',
	ready: function() {
		this.getAllBeers(this.getAllComponents);
	},
	data: {
		beers: [],
		components: [],
		components_list: components_list,
		beer_headers: [],
		beer_headers_ignore: ['_id', '__v'],
		Beer: Beer, // Beer model
		Component: Component // Component model
	},
	computed: {
		isThisPage: function(path) {
			return true;
		}
	},
	methods: {
		getAllComponents: function(cb) {
			self = this;
			$.ajax({
				dataType: "json",
				url: '/components/',
				success: function(data, error) {
					// TODO: validate
					self.components.length = 0;
					if (error == "success") {
						$(data).each(function(i, el) {
							self.components.push(new self.Component(el));
						});
						if (cb) cb();
					}
					else {
						// TODO
					}
				},
				timeout: 2000
			}).fail(function(xhr, status) {
				if(status == "timeout") {
					console.error("timed out to API endpoint '/components/'");
				}
			});
		},
		getAllBeers: function(cb) {
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
						if (cb) cb();
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
		},
		addComponentToBeer: function(event) {
			this.createNewComponent(event.target.beer.value, event.target.component.value)
		},
		createNewComponent: function(beer_id, componentName) {
			var component = new Component({name: componentName, beer_id: beer_id});
			component.save(false, this.getAllComponents);
		}
	}
});