module.exports = function(data) {
	var self = this;
	self.data = (!data) ? false : data;
	self.edited = false;
	self.save = function() {
		return $.ajax({
			method: 'PUT',
			url: '/beers/',
			data: self.data
		}).done(function(beer) {
			console.log("saved beer", beer);
			if (beer) {
				self.data = beer;
				self.edited = false;
			}
		})
	}
	self.delete = function() {
		return $.ajax({
			method: 'DELETE',
			url: '/beers/',
			data: self.data
		}).done(function() {
			self.data = false;
		})
	}
}