/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _koa = __webpack_require__(2);

	var _koa2 = _interopRequireDefault(_koa);

	var _fs = __webpack_require__(3);

	var _fs2 = _interopRequireDefault(_fs);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	var app = new _koa2.default();

	// homepage return html
	app.use(function () {
		var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(c, next) {
			var html;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!(c.url === '/')) {
								_context.next = 7;
								break;
							}

							_context.next = 3;
							return new Promise(function (resolve) {
								return _fs2.default.readFile('index.html', function (err, file) {
									return resolve(file);
								});
							});

						case 3:
							html = _context.sent;

							c.body = html.toString().replace('{{host}}', 'http://' + _config2.default.host + ':' + _config2.default.client.port + '/static');
							_context.next = 8;
							break;

						case 7:
							return _context.abrupt('return', next());

						case 8:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}());

	app.use(function () {
		var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(c) {
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							c.body = 'hehe';

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x3) {
			return _ref2.apply(this, arguments);
		};
	}());

	app.listen(_config2.default.server.port);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _webpack = __webpack_require__(5);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(8);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		host: '127.0.0.1',
		client: {
			port: 3000,
			webpack: _webpack4.default
		},
		server: {
			port: 8000,
			webpack: _webpack2.default
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _webpack = __webpack_require__(6);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _path = __webpack_require__(7);

	var _path2 = _interopRequireDefault(_path);

	var _fs = __webpack_require__(3);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var join = function join() {
		for (var _len = arguments.length, joinpath = Array(_len), _key = 0; _key < _len; _key++) {
			joinpath[_key] = arguments[_key];
		}

		return _path2.default.join.apply(undefined, [__dirname].concat(joinpath));
	};
	var nodeModules = {};
	_fs2.default.readdirSync('node_modules').filter(function (x) {
		return ['.bin'].indexOf(x) === -1;
	}).forEach(function (mod) {
		return nodeModules[mod] = 'commonjs ' + mod;
	});

	var config = {
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
			path: _path2.default.join(__dirname, '../build'),
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
			loaders: [{
				test: /\.js$/,
				loader: 'babel'
			}]
		},
		plugins: [new _webpack2.default.NoErrorsPlugin(), new _webpack2.default.DefinePlugin({
			'process.env.NODE_ENV': '"' + ("production") + '"'
		})]
	};

	if (true) {
		config.plugins.concat([new _webpack2.default.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			comments: false
		})]);
	} else {
		config.plugins.concat([new _webpack2.default.HotModuleReplacementPlugin(), new _webpack2.default.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })]);
	}
	exports.default = config;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _webpack = __webpack_require__(6);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _path = __webpack_require__(7);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var join = function join() {
		for (var _len = arguments.length, joinpath = Array(_len), _key = 0; _key < _len; _key++) {
			joinpath[_key] = arguments[_key];
		}

		return _path2.default.join.apply(undefined, [__dirname].concat(joinpath));
	};

	var config = {
		entry: {
			app: './client/index.js'
		},
		output: {
			path: join('../build/client'),
			filename: '[name].js',
			chunkFilename: '[name].[chunkhash:5].chunk.js',
			publicPath: '/static/'
		},
		resolve: {
			extensions: ['', '.js', '.jsx', '.css', '.scss'],
			alias: {
				root: join('../client')
			}
		},
		module: {
			loaders: [{
				test: /\.(js|jsx)$/,
				loader: 'babel',
				include: [join('../client')]
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]'
			}, {
				test: /\.(sass|scss)$/,
				loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!postcss-loader',
				exclude: [join('../client/common/style'), /\.global\.(sass|scss)$/]
			}, {
				test: /\.less$/,
				loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!less-loader'
			}, {
				test: /\.(sass|scss)$/,
				loader: 'style-loader!css-loader!postcss-loader',
				include: [join('../client/common/style'), /\.global\.(sass|scss)$/]
			}, {
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: 'url-loader?limit=8192&name=resource/img/[hash].[ext]'
			}, {
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&name=resource/font/[hash].[ext]&minetype=application/font-woff'
			}, {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=resource/font/[hash].[ext]'
			}]
		},
		plugins: [new _webpack2.default.NoErrorsPlugin(), new _webpack2.default.DefinePlugin({
			'process.env.NODE_ENV': '"' + ("production") + '"'
		})]
	};

	if (true) {
		config.plugins.concat([new _webpack2.default.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			comments: false
		})]);
	} else {
		config.entry.app = ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', config.entry.app];
		config.devtool = 'eval';
		config.plugins.unshift(new _webpack2.default.HotModuleReplacementPlugin());
	}

	exports.default = config;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }
/******/ ]);