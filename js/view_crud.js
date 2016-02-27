// Vue
new Vue({
	el: '#main-container',
	ready: function() {
		var self = this;
		$(window).resize(function() {
			self.updateGridView();
		})
		self.beerFactory = new self.BeerFactory(); // Instantiate beer factory
		self.componentFactory = new self.ComponentFactory(); // Instantiate component factory
		self.beerFactory.setupBeers()
			.then(self.componentFactory.setupComponents)
			.then(() => { 
				self.createBcOptionsAndNames();
				self.ready = true;
				Vue.nextTick(function () {
					self.updateGridView();
				})
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
		showSidebar: JSON.parse(localStorage.getItem('showSidebar')) || false,
		showSidebarRight: JSON.parse(localStorage.getItem('showSidebarRight')) || false,
		hideUnrelated: JSON.parse(localStorage.getItem('hideUnrelated')) || false,
		components_list: require('../vue_components/components'), // Components
		beer_status: { 
			0: 'Idea',
			1: 'Scheduled for brewing',
			2: 'Brewing',
			3: 'Conditioning',
			4: 'Dry hopping',
			5: 'On tap'
		}
	},
	watch: {
		'showSidebar': function(val, oldVal) {
			var self = this;
			setTimeout(function() {self.updateGridView();}, 300); // 300 = transition time
			localStorage.setItem('showSidebar', val);
		},
		'showSidebarRight': function(val, oldVal) {
			var self = this;
			setTimeout(function() {self.updateGridView();}, 300); // 300 = transition time
			localStorage.setItem('showSidebarRight', val);
		},
		'hideUnrelated': function(val, oldVal) {
			localStorage.setItem('hideUnrelated', val);
		}
	},
	methods: {
		// Beers
		createNewBeer: function() {
			self = this;
			self.beerFactory.createNewBeer()
				.then((beer) => self.beerFactory.setupBeers())
				.then(() => self.selectedBeer = self.beerFactory.lastBeer())
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
		duplicateComponent: function(component) {
			this.componentFactory.duplicate(component).then(this.componentFactory.setupComponents)
		},
		// Utility
		confirm: function(message, action, then) {
			if (DEV) action().then(then);
			else if (confirm(message)) action().then(then);
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
		},
		updateGridView: function() {
			if ($('#content').width() < 800) {
				$('.beers').addClass('full');
			} 
			else {
				$('.beers').removeClass('full');
			}
		}
	}
})
