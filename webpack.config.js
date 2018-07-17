const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/js/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.jsx$|\.js$/,
      //   loader: 'eslint-loader',
      //   include: `${__dirname}/src`,
      //   exclude: /bundle\.js$/
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
            {
                loader: 'url-loader'
            },
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ],
  },
  devServer: {
    contentBase: `${__dirname}/src/js`,
    filename: 'index_bundle.js',
    inline: true,
    port: 8008,
    https: true,
  },
  watchOptions: {
    poll: true
  },
  mode: 'development',
  plugins: [HTMLWebpackPluginConfig],
};
