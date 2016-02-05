// Vue
vue = new Vue({
	el: '#content',
	ready: function() {
		var self = this;
		self.setupBeers()
			.then(self.setupComponents)
			.then(() => { self.ready = true; })
	},
	data: {
		beers: [],
		components: [],
		beer_headers: [],
		component_headers: [],
		beer_headers_ignore: ['_id', '__v'],
		component_headers_ignore: ['_id', '__v'],
		ready: false,
		selectedBeer: "",
		Beer: require('./models/Beer'), // Beer model
		Component: require('./models/Component'), // Component model
		components_list: require('../vue_components/components') // Components
	},
	methods: {
		// Beers
		fetchBeers: function() {
			self = this;
			return $.ajax({
				dataType: "JSON",
				url: '/beers/'
			})
		},
		addBeers: function(beers) {
			var self = this;
			self.beers.length = 0;	
			$(beers).each(function(i, el) {
				self.beers.push(new self.Beer(el));
			})
		},
		setupBeers: function() {
			var self = this;
			return self.fetchBeers().then(function(beers) {
				self.addBeers(beers);
				self.setBeerHeaders();
			})
		},
		createNewBeer: function() {
			var new_beer = new this.Beer({name: 'new beer'});
			new_beer.save().then(this.setupBeers);
		},
		setBeerHeaders: function() {
			this.beer_headers.length = 0;
			if (this.beers.length > 0) {
				for (name in this.beers[0].data) {
					if (this.beer_headers_ignore.indexOf(name) == -1) this.beer_headers.push(name);
				}
			}
		},
		saveAllBeers: function() {
			$(this.beers).each(function(i, beer) {
				beer.save();	
			})
		},
		// Components
		fetchComponents: function() {
			self = this;
			return $.ajax({
				dataType: "JSON",
				url: '/components/'
			})
		},
		addComponents: function(components) {
			var self = this;
			self.components.length = 0;
			$(components).each(function(i, el) {
				self.components.push(new self.Component(el));
			})
		},
		setupComponents: function() {
			var self = this;
			return self.fetchComponents().then(function(components) {
				self.addComponents(components);
				self.setComponentHeaders();
			})
		},
		setComponentHeaders: function() {
			this.component_headers.length = 0;
			if (this.components.length > 0) {
				for (name in this.components[0].data) {
					if (this.component_headers_ignore.indexOf(name) == -1) this.component_headers.push(name);
				}
			}
		},
		addComponentToBeer: function(event) {
			this.createNewComponent(event.target.beer.value, event.target.component.value)
		},
		createNewComponent: function(beer_id, componentName) {
			var component = new self.Component({name: componentName, beer_id: beer_id});
			component.save().then(this.setupComponents);
		},
		// Utility
		confirm: function(message, action, then) {
			if (confirm(message)) action().then(then);
		},
		isComponentUnattached: function(beer_id) {
			for (var beer of this.beers) {
				if (beer.data._id == beer_id) { 
					return false;
				}
			}
			return true;
		}
	}
});