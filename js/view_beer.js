// vue components
var bc_color = require('../vue_components/bc_color.vue');
var bc_developer_bar = require('../vue_components/bc_developer_bar.vue');

// models
var Beer = require('./models/Beer');

// container for the components
var components_element = $('#bc-components');

// vue
var vue;
function initVue(beer) {
	vue = new Vue({
		el: 'body',
		data: {
			beer: beer
		},
		components: {
			'bc-color' : bc_color,
			'bc-developer-bar' : bc_developer_bar
		}
	})
}

function fetchBeer(id, then) {
	$.ajax({
		method: 'GET',
		dataType: 'JSON',
		url: '/beers/' + id,
		success: function(data) {
			then(new Beer(data));
		} 
	});
}

function setupComponents(beer) {
	// TODO: this is just for testing
	for (prop in beer.data) {
		if (prop.indexOf('bc_') != -1) {
			if (beer.data[prop]) {
				var elementTag = prop.replace('_','-');
				$(components_element).append("<" + elementTag + " :beer='beer'></" + elementTag + ">");
			}
		}
	}
	initVue(beer);
}

fetchBeer(BEER_ID, setupComponents);