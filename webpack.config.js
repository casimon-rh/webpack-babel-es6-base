module.exports = [
  {
    context: __dirname,
    entry: ['./js/widget.js', './js/index.js', './css/index.css'],
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
            presets: ['es2015'],
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
                minimize: true
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        }
      ]
    }
  }
];
