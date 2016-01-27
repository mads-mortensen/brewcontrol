module.exports = function(data) {
	var self = this;
	this.data = (!data) ? false : data;
	this.save = function(event, callback) {
		$.ajax({
			method: 'PUT',
			url: '/beers/',
			data: self.data
		}).done(function(beer) {
			// TODO: validation
			console.log("saved beer", beer);
			if (beer) self.data = beer;
			if (callback) callback();
		});
	}
	this.delete = function(event, callback) {
		$.ajax({
			method: 'DELETE',
			url: '/beers/',
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