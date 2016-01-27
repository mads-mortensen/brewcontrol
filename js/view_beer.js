var bc_color = require('../vue_components/bc_color.vue');
var Beer = require('./models/Beer.js');

var vue = new Vue({
	el: 'body',
	data: {
		beer: {data: []}
	},
	components: {
		'bc-color' : bc_color
	},
	methods: {
		fetchBeer: function(id) {
			var self = this;
			$.ajax({
				method: 'GET',
				dataType: 'JSON',
				url: '/beers/' + id,
				success: function(data) {
					self.beer = new Beer(data);
				} 
			});
		}
	}
})

vue.fetchBeer(BEER_ID);