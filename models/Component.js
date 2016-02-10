// DB
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	type: { type: String, default: 'bc_color' },
	data: { type: String, default: '' },
	beer_id: { type: String}
});

mongoose.model('Component', schema);