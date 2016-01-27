console.log(BEER_ID);

var vue = new Vue({
	el: 'body',
	data: {
		beer: {}
	},
	methods: {
		fetchBeer: function(id) {
			var self = this;
			$.ajax({
				method: 'GET',
				dataType: 'JSON',
				url: '/beers/' + id,
				success: function(data) {
					self.beer = data;
				} 
			});
		}
	}
})

vue.fetchBeer(BEER_ID);