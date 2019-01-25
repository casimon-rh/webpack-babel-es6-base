const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        })
      ]
    },
    entry: ['./js/index.js', './css/index.css'],
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2017'],
            plugins: ['transform-object-assign', 'transform-object-rest-spread']
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
                minimize: {
                  safe: true
                },
                sourceMap: true
              }
            },
            'css-loader'
          ]
        }
      ]
    }
  }
];
