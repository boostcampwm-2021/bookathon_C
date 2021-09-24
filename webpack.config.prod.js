const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: [
    "@babel/polyfill",
    "./src/js/main.js",
  ],
  output: {
        path:path.join(__dirname, "/public"),
        filename:'./javascripts/[name]_bundle.js',
        publicPath:'./',
        assetModuleFilename: './images/[name][ext]'
  },
  module: {
    rules:[
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test:/\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      },
    ]
  },
  
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/html/main.html',
      filename: './html/main.html'
    })
  ]
  
  
  
}
