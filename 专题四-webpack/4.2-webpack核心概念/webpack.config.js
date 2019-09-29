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
				 options: {
	 	 	 	 	 presets: [
	 	 	 	 	 	['@babel/preset-env', {
	 	 	 	 	 	 targets: {
	 	 	 	 	 	 	 browsers: ['>1%'] // 以浏览器为目标
						 }
						}]
					 ]
					}
			  }
		 }]
	 }

}