var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");

module.exports = {
	context: __dirname + "/src",
	devtool: debug ? "inline-source-map" : null,
	entry: "./js/client.js",
	output: {
		path: __dirname + "/src/",
		filename: "client.min.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css!'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				 // inline base64 URLs for <=8k images, direct URLs for the rest
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.js?$/,
				exclude: /(node_module|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['transform-decorators-legacy']
				}
			}

		]
	},

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurencyOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			sourcemap: false
		})

	]
};
