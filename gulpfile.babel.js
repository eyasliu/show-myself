import gulp from 'gulp';
import webpack from 'webpack';
import nodemon from 'nodemon';
import WebpackDevServer from 'webpack-dev-server';
import config from './config';

const {client: clientConfig, server: serverConfig} = config

gulp.task('dev', ['dev:client', 'dev:server'])

gulp.task('dev:client', () => {
  const compiler = webpack(clientConfig.webpack);
  
  compiler.plugin('done', (stats) => {
    // run('lint');
  });
  
  new WebpackDevServer(compiler, {
    contentBase: './client',
    publicPath: clientConfig.webpack.output.publicPath,
    hot: true,
    quiet: false,
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    }
  }).listen(clientConfig.port, config.host, (err, stats) => {
    if (err) console.log(err);
    console.log(`webpack was listenning: http://${config.host}:${clientConfig.port}`);
  });
});

gulp.task('dev:server', ['watch:server'], () => {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: './build/server.js',
    ignore: ['*'],
    ext: 'noop'
  }).on('restart', () => {
    console.log('restart server ok.');
  })
})

// watch server
gulp.task('watch:server', () => {
  webpack(serverConfig.webpack).watch(100, (err, stats) => {
  	console.log(stats.toString({
			chunks: false,
      colors: true
  	}))
    nodemon.restart();
  });
})

gulp.task('build', () => {
	// build server
	webpack(serverConfig.webpack).run((err, stats) => {
		console.log(stats.toString({
			chunks: false,
      colors: true
		}))
	})

	// build client
	webpack(clientConfig.webpack).run((err, stats) => {
		console.log(stats.toString({
			chunks: false,
			colors: true
		}))
	})
})

