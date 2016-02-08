var components = require('../vue_components/components.js');
components['bc-developer-bar'] =  require('../vue_components/bc_developer_bar.vue');

// vue
new Vue({
	el: 'body',
	ready: function() {
		var self = this;
		self.beerFactory.loadOneBeer(BEER_ID)
			.then(function() {
				self.ready = true;
			})
	},
	data: {
		beerFactory: require('./helpers/BeerFactory'), // Beers factory
		Component: require('./models/Component'), // Component model
		beer: {data: {}}, // Empty beer object
		ready: false,
		components: []
	},
	methods: {
		fetchComponents: function(id) {
			var self = this;
			return $.ajax({
				method: 'GET',
				dataType: 'JSON',
				url: '/components/beer/' + id
			})
		}
	},
	components: components
})