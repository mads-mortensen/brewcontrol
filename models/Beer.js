// DB
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: {type: String, default: 'unnamed beer'},
	style: {type: String, default: 'no style'},
	target_ebc: {type: Number, default: 0}
});

mongoose.model('Beer', schema);