// Vue
new Vue({
	el: '#content',
	ready: function() {
		var self = this;
		self.beerFactory = new self.BeerFactory(); // Instantiate beer factory
		self.componentFactory = new self.ComponentFactory(); // Instantiate component factory
		self.beerFactory.setupBeers()
			.then(self.componentFactory.setupComponents)
			.then(() => { 
				self.createBcOptionsAndNames();
				self.ready = true;
			})
	},
	data: {
		BeerFactory: require('./helpers/BeerFactory'),
		ComponentFactory: require('./helpers/ComponentFactory'),
		beerFactory: false, // Beer factory
		componentFactory: false, // Component factory
		ready: false,
		selectedBeer: "",
		bc_options: {},
		bc_names: {},
		components_list: require('../vue_components/components') // Components
	},
	methods: {
		// Beers
		createNewBeer: function() {
			this.beerFactory.createNewBeer()
				.then(this.beerFactory.setupBeers)
		},
		// Components
		addComponentToBeer: function(event) {
			var self = this;
			self.componentFactory.createNewComponent(event.target.beer.value, event.target.component.value)
				.then(function() {
					self.componentFactory.setupComponents();
					//self.addBCtoAllComponents();
				})
		},
		addComponent: function(event) {
			this.componentFactory.createNewComponent("", event.target.component.value)
				.then(this.componentFactory.setupComponents)
		},
		// Utility
		confirm: (message, action, then) => {
			if (confirm(message)) action().then(then);
		},
		isComponentUnattached: function(beer_id) {
			for (var i in this.beerFactory.beers) {
				if (this.beerFactory.beers[i].data._id == beer_id) {
					return false;
				}
			}
			return true;
		},
		createBcOptionsAndNames: function() { // Only once pr page load
			for (var component in this.components_list) {
				var component_type = component.replace('-', '_');
				this.bc_options[component_type] = this.components_list[component].bc.options;
				this.bc_names[component_type] = this.components_list[component].bc.name;
			}
		}
	}
});