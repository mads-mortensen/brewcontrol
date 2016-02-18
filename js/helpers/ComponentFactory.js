module.exports = function() {
	var self = this;
	self.Component = require('../models/Component');
	self.components = [];
	self.component_headers = [];
	self.component_headers_ignore = ['_id', '__v', 'type'];
	// Fetch all components -> instatiate component objects -> save in this.components ->  save headers in this.component_headers
	self.setupComponents = () => 
		self.fetchComponents()
			.then(components => {
				self.addComponents(components);
				self.setComponentHeaders();
			})
	self.fetchComponents = () =>
		$.ajax({
			method: 'GET',
			dataType: "JSON",
			url: '/components/'
		})
	self.addComponents = components => {
		self.components.length = 0;
		$(components).each((i, el) => self.components.push(new self.Component(el)))
	}
	self.setComponentHeaders = () => {
		this.component_headers.length = 0;
		if (this.components.length > 0) {
			for (var prop in this.components[0].data) {
				if (this.component_headers_ignore.indexOf(prop) == -1) this.component_headers.push(prop);
			}
		}
	}
	self.createNewComponent = (beer_id, componentName) =>
		(new self.Component({name: componentName, beer_id: beer_id || ""})).save();
	// Save all components in this.components
	self.saveAllComponents = () => {
		$(self.components).each((i, component) => component.save())
	}
	self.getAllBeerComponents = id => 
		$.ajax({
			method: 'GET',
			dataType: 'JSON',
			url: '/components/beer/' + id,
			success: components => {
				$(components).each((i, component) => self.components.push(new self.Component(component)));
			}
		})
	self.componentsByType = function(type) {
		return (self.components.length > 0) ? self.components.filter(function(component) { return component.data.type == type }) : false;
	}
	self.duplicate = component => {
		var copy = new self.Component(component.data);
		copy.data._id = undefined;
		console.log(copy);
		return copy.save();
	}
}