const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]]
            }
          },
          require.resolve('react-docgen-typescript-loader')
        ]
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: { parser: 'typescript' }
          }
        ],
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../javascript'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
