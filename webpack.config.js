const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '/src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        include: path.join(__dirname, '/src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
                modules: {
                    mode: 'local',
                    localIdentName: '[name]__[local]',
                    context: path.resolve(__dirname, 'src'),
                  },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true
  }
};