var path = require('path');

module.exports = {
	entry: './main.js',
	output: {
		path: path.join(__dirname, '/public/javascripts/'),
		filename: 'vue_components.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			}
		]
	}
}
