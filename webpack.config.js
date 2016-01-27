var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		view_beer: 		'./js/view_beer.js',
		view_main: 		'./js/view_main.js',
		view_beercrud: 	'./js/view_beercrud.js'
	},
	output: {
		path: path.join(__dirname, '/public/javascripts/'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			}
		]
	},
	plugins: [ 
		new webpack.optimize.UglifyJsPlugin({minimize: true, compress: { warnings: false}}) //TODO: make conditional (only production)
	]
}
