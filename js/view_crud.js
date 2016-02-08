// Vue
vue = new Vue({
	el: '#content',
	ready: function() {
		var self = this;
		self.beerFactory.setupBeers()
			.then(function() {
				self.ready = true;
			})
		//self.setupBeers()
		//	.then(self.setupComponents)
		//	.then(() => { self.ready = true; })
	},
	data: {
		beerFactory: require('./helpers/BeerFactory'), // Beers factory
		components: [],
		component_headers: [],
		component_headers_ignore: ['_id', '__v'],
		ready: false,
		selectedBeer: "",
		Component: require('./models/Component'), // Component model
		components_list: require('../vue_components/components') // Components
	},
	methods: {
		// Beers
		createNewBeer: function() {
			self = this;
			self.beerFactory.createNewBeer()
				.then(self.beerFactory.setupBeers)
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
			var component = new self.Component({name: componentName, beer_id: beer_id || ""});
			component.save().then(this.setupComponents);
		},
		addComponent: function(event) {
			this.createNewComponent("", event.target.component.value);
		},
		// Utility
		confirm: function(message, action, then) {
			if (confirm(message)) action().then(then);
		},
		isComponentUnattached: function(beer_id) {
			for (var beer of this.beerFactory.beers) {
				if (beer.data._id == beer_id) { 
					return false;
				}
			}
			return true;
		}
	}
});