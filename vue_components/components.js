module.exports = {};

var components_context = require.context('.', true, /\.vue/);
components_context.keys().forEach(function(file) {
	var component = components_context(file);
	if (component.bc) {
		// Set options if provided by component data from db
		component.ready = function() {
			for (var option in this.options) {
				if (this.component.componentData[option]) {
					this.options[option].value = this.component.componentData[option];
				}
			}
		};
		module.exports[component.bc.directive] = component;
	}
})