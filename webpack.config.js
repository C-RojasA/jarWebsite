const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractVendors = new ExtractTextPlugin('vendors.css');

module.exports = {
  resolve: {

    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /src\/styles/],
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
      }, {
      test: /\.css$/,
      exclude: /src/,
      include: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader',
      }),
    }, {
      test: /\.css$/,
      include: /src\/styles/,
      loader: extractVendors.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader',
      }),
    },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'url-loader?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
    /*  {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },*/
      {
        test: /bootstrap\/dist\/js\/umd\//,
        loader: 'imports?jQuery=jquery'
      },
      {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader?name=[hash:12].[ext]&outputPath=images/',
        'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}',
        ],
      },
    ]
  },

  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default']
  }),
  new HtmlWebpackPlugin({
    title: 'jarWebsite',
    template: path.join(__dirname, 'src', 'index.html'),
    filename: 'index.html'
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true
  })
],
devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 8080,
    inline: true,
    contentBase: path.join(__dirname, './src'),
    historyApiFallback: true
  }
}
