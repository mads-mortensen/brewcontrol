// DB
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, default: 'unnamed beer' }
});

mongoose.model('Beer', schema);

module.exports = true;