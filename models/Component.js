// DB
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: {type: String, default: 'bc_color'},
	data: {type: String, default: '[]'},
	beer_id: {type: String, required: true}
});

mongoose.model('Component', schema);