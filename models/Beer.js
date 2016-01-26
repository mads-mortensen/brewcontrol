// DB
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: {type: String, default: 'unnamed beer'},
	style: {type: String, default: 'no style'}
});

mongoose.model('Beer', schema);

module.exports = true;