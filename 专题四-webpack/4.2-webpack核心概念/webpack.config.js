module.exports = {
	 entry: {
	 	 app: './app.js'
	 },
	 output: {
	 	 path: __dirname + '/dist/js',
	 	 filename: '[name].[hash:6].js'
	 }

}