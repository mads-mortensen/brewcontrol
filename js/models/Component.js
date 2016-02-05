module.exports = function(data) {
	var self = this;
	self.data = data || false;
	self.type = data.type || false;
	self.hidden = true;
	self.edited = false;
	self.parseJSON = function(str) {
		try {
			var obj = JSON.parse(str);
			return obj;
		}
		catch(error) {
			console.log("error when parsing component data: ", error);
			return {};
		}
	}
	self.componentData = (!self.data.data) ? false : self.parseJSON(self.data.data);
	self.save = function(event, useComponentData) {
		if (useComponentData) self.data.data = (self.componentData) ? JSON.stringify(self.componentData) : "";
		return $.ajax({
			method: 'PUT',
			url: '/components/',
			data: self.data
		}).done(function(component) {
			console.log("saved component", component);
			self.hidden = true;
			if (component) {
				self.data = component;
				self.componentData = (!self.data.data) ? false : self.parseJSON(self.data.data);
				self.edited = false;
			}
		})
	}
	self.saveComponentData = function(event) {
		return self.save(event, true);
	}
	self.delete = function() {
		return $.ajax({
			method: 'DELETE',
			url: '/components/',
			data: self.data
		}).done(function(success) {
			self.data = false;
		})
	}
}