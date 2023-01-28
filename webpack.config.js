const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: './js/index.js',
	output: {
		filename: 'main.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		//clean: true
	},
	plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		inject: true,
		template: 'index.html',
	}),
	],
	module: {
		rules: [
		{
			test: /\.css$/i,
			use: ["style-loader", "css-loader"]
		}]
	}
}


