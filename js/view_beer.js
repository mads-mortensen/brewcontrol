var components = require('../vue_components/components.js');
components['bc-developer-bar'] =  require('../vue_components/bc_developer_bar.vue');

// vue
new Vue({
	el: 'body',
	ready: function() {
		var self = this;
		self.beerFactory = new self.BeerFactory(); // Instantiate beer factory
		self.componentFactory = new self.ComponentFactory(); // Instantiate component factory
		self.beerFactory.loadOneBeer(BEER_ID)
			.then(self.componentFactory.getAllBeerComponents(BEER_ID))
			.then(() => self.ready = true)
	},
	data: {
		BeerFactory: require('./helpers/BeerFactory'),
		ComponentFactory: require('./helpers/ComponentFactory'),
		beerFactory: false, // Beer factory
		componentFactory: false, // Component factory
		ready: false
	},
	methods: {
		test: function() { console.log(this.componentFactory.components); }
	},
	components: components
})