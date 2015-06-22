module.exports = {
  entry: './index.jsx',

  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/assets' // port 8090 for webpack-dev-server
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },

  externals: {
    // don't bundle 'react' npm package, but use global 'React' variable
    'react': 'React'
  },

  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  }
};