const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const webpack = require('webpack');
const getClientEnvironment = require('./env');


const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  mode: 'production', 									  // production mode set, Enable optimization options
  entry: paths.ssrIndexJs, 							  // entry Path
  target: 'node',												  // notify Execute in Node Env
  output: {
    path: paths.ssrBuild,  								// build Path
    filename: 'server.js', 								// file Name
    chunkFilename: 'js/[name].chunk.js',  // chunk file Name
    publicPath: paths.servedPath,         // static file Path
	},
	module: {
    rules: [
      {
        oneOf: [
          // Processing for JS
          {
            test: /.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false
            }
          },
          // Processing for CSS
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            loader: require.resolve('css-loader'),
            options: {
              exportOnlyLocals: true			// Do not create CSS file
            }
          },
          // Processing for CSS Module
          {
            test: cssModuleRegex,
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              exportOnlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent
            }
          },
          // Processing for Sass
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  exportOnlyLocals: true
                }
              },
              require.resolve('sass-loader')
            ]
          },
          // Processing for Sass + CSS Module
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                  exportOnlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent
                }
              },
              require.resolve('sass-loader')
            ]
          },
          // Settings for url-loader
          {
            test: [/.bmp$/, /.gif$/, /.jpe?g$/, /.png$/],
            loader: require.resolve('url-loader'),
            options: {
              emitFile: false, 							// Option not to save files separately
              limit: 10000, 								// Normally, when it's over 9.76 KB, it's saved as a file.
							// When the emitFile value is false, only the path is prepared and the file is not saved.
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
					//	Files other than the extension set above use 'file-loader.'
          {
            loader: require.resolve('file-loader'),
            exclude: [/.(js|mjs|jsx|ts|tsx)$/, /.html$/, /.json$/],
            options: {
              emitFile: false, 					// Option not to save files separately
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
	},
  resolve: {
    modules: ['node_modules']
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin(env.stringified)   // Injection of Environmental Variables
  ]
};