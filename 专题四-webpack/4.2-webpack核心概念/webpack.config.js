module.exports = {
	 mode: 'development',
	 entry: {
	 	 app: './app.js'
	 },
	 output: {
	 	 path: __dirname + '/dist/js',
	 	 filename: '[name].[hash:6].js'
	 },
	 module: {
	 	 rules: [{
	 	 	 test: /\.js$/,
			  use: {
	 	 	 	 loader: 'babel-loader',
			  }
		 },{
	 	 	test: /\.tsx?$/,
			 use: {
	 	 		 loader: 'ts-loader'
			 }
		 }]
	 }

}