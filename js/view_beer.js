var components = require('../vue_components/components.js');
components['bc-developer-bar'] =  require('../vue_components/bc_developer_bar.vue');

// vue
new Vue({
	el: 'body',
	ready: function() {
		var self = this;
		self.fetchBeer(BEER_ID)
			.then((data) => {
				self.beer = new self.Beer(data);
				return self.fetchComponents(BEER_ID);
			})
			.then((components) => {
				for (var component of components) {
					self.components.push(new self.Component(component));
				}
			})
	},
	data: {
		Beer: require('./models/Beer'), // Beer model
		Component: require('./models/Component'), // Component model
		beer: {data: {}}, // empty beer object
		components: []
	},
	methods: {
		fetchBeer: function(id) {
			return $.ajax({
				method: 'GET',
				dataType: 'JSON',
				url: '/beers/' + id
			});
		},
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