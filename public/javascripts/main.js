function getBeers(callback) {
	$.getJSON('/beers', function(data) {
		callback(data);
	});
}