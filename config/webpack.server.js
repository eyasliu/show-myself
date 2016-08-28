import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

const join = (...joinpath) => path.join.apply(undefined, [__dirname, ...joinpath]);
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod)

const config = {
	entry: {
		server: './server/index.js'
	},
	target: 'node',
	node: {
		__diename: 'mock',
		__filename: 'mock'
	},
	externals: nodeModules,
	output: {
		path: path.join(__dirname, '../build'),
		filename: '[name].js',
		publicPath: '/build/'
	},
	resolve: {
	  extensions: ['', '.js'],
	  alias: {
	    root: join('../'),
	    server: join('../server')
	  }
	},
	module: {
		loaders: [
			{
			  test: /\.js$/,
			  loader: 'babel',
			  // include: join('../server')
			  // exclude: [join('../node_modules')]
			}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
		})
	]
}

if(process.env.NODE_ENV == 'production'){
	config.plugins.concat([
		new webpack.optimize.UglifyJsPlugin({
		  compress: {
		    warnings: false
		  },
		  comments: false
		})
	])
} else {
	config.plugins.concat([
		new webpack.HotModuleReplacementPlugin(),
		new webpack.BannerPlugin('require("source-map-support").install();',
      {raw: true, entryOnly: false}
	  )
	])
}
export default config