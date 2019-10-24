module.exports = {
	 mode: 'development',
	 entry: {
	 	 app: './app.js'
	 },
	 output: {
	 	 path: __dirname + '/dist/js',
	 	 // filename: '[name].[hash:6].js'
	 	 filename: '[name].bundle.js'
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
		 },{
			  test: /\.css$/,
			  use: [{
					loader: 'style-loader'
			  },{
					loader: 'css-loader'
			  }
			  ]
		 },{
	 	 	 test: /\.less$/,
			  use: [{
					loader: 'style-loader'
			  },{
	 	 	 	 loader: 'css-loader'
			  },{
	 	 	 	 loader: 'less-loader'
			  }
			  ]
		 }]
	 }

}