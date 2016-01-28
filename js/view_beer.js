// vue components
var bc_color = require('../vue_components/bc_color.vue');
var bc_developer_bar = require('../vue_components/bc_developer_bar.vue');

// models
var Beer = require('./models/Beer');
var Component = require('./models/Component')

// Components list
var components_list = require('./constants/components_list')

// container for the components
var components_element = $('#bc-components');

// vue
var vue;
function initVue(beer, components) {
	vue = new Vue({
		el: 'body',
		data: {
			beer: beer,
			components: components
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

function fetchComponents(id, then) {
	$.ajax({
		method: 'GET',
		dataType: 'JSON',
		url: '/components/beer/' + id,
		success: function(data) {
			var components = [];
			$(data).each(function(i, el) {
				components.push(new Component(el));
			})
			then(components);
		} 
	});
}

function setupComponents(beer) {
	fetchComponents(beer.data._id, function(components) {
		$(components).each(function(i, el) {
			if (components_list.indexOf(el.data.name) != -1) {
				var elementTag = el.data.name.replace('_','-');
				$(components_element).append("<" + elementTag + " :beer='beer' :component_data='components[" + i + "]'></" + elementTag + ">");
			}
			else {
				console.warn("Warning, component " + el.data.name + " is not registered.");
			}
		});
		initVue(beer, components);
	})	
}

fetchBeer(BEER_ID, setupComponents);