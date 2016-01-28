module.exports = function(data) {
	var self = this;
	this.data = (!data) ? false : data;
	this.save = function(event, callback) {
		$.ajax({
			method: 'PUT',
			url: '/components/',
			data: self.data
		}).done(function(component) {
			// TODO: validation
			console.log("saved component", component);
			if (component) self.data = component;
			if (callback) callback();
		});
	}
	this.delete = function(event, callback) {
		$.ajax({
			method: 'DELETE',
			url: '/components/',
			data: self.data
		}).done(function(success) {
			// TODO: validation
			if (success) {
				self.data = false;
				if (callback) callback();
			}
		});
	}
}