module.exports = function(data) {
	var self = this;
	this.data = (!data) ? false : data;
	this.save = function() {
		return $.ajax({
			method: 'PUT',
			url: '/beers/',
			data: self.data
		}).done(function(beer) {
			console.log("saved beer", beer);
			if (beer) self.data = beer;
		})
	}
	this.delete = function() {
		return $.ajax({
			method: 'DELETE',
			url: '/beers/',
			data: self.data
		}).done(function() {
			self.data = false;
		})
	}
}