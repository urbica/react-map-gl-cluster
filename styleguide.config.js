const path = require('path');
const webpack = require('webpack');

module.exports = {
  title: 'Urbica React Map GL Cluster',
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: true,
  require: [path.resolve(__dirname, 'styleguide.setup.js')],
  moduleAliases: {
    '@urbica/react-map-gl-cluster': path.resolve(__dirname, 'src')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  },
  dangerouslyUpdateWebpackConfig: (webpackConfig) => {
    const envPlugin = new webpack.EnvironmentPlugin(['MAPBOX_ACCESS_TOKEN']);
    webpackConfig.plugins.push(envPlugin);
    return webpackConfig;
  }
};
