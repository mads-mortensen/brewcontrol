// DB
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: {type: String, default: 'unnamed beer'},
	style: {type: String, default: 'no style'},
	target_ebc: {type: Number, default: 0},
	// components
	bc_color: {type: Boolean, default: false}
});

mongoose.model('Beer', schema);

module.exports = true;