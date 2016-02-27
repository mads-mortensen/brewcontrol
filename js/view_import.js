// Vue
new Vue({
	el: 'body',
	data: {
		recipes: [],
		Beer: require('./models/Beer'),
	},
	methods: {
		import: function() {
			var self = this,
			input = document.getElementById("inputfile"),
			fReader = new FileReader();
			if (input.files.length < 1) return false;
			fReader.readAsText(input.files[0]);
			fReader.onloadend = function(event) {
				var xml = fReader.result;
				var parseString = require('xml2js').parseString;
				parseString(xml, function(err, result) {
					$(result.RECIPES).each(function(i, el) {
						el.RECIPE[0].selected = false;
						self.recipes.push(el.RECIPE[0]);
					})
				})
			}
		},
		createSelected: function() {
			var self = this;
			if (self.recipes.length > 0) {
				$(self.recipes).each(function(i, el) {
					var beer = new self.Beer({ name : el.NAME[0], target_ebc : parseFloat(el.EST_COLOR[0]) });
					beer.save();
				})
			}
		},
		selectAll: function() {
			$(this.recipes).each(function(i, el) {
				el.selected = true;
			})
		},
		alert: function(msg) {
			console.log(msg);
		}
	}
})