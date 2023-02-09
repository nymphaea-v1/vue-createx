const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')

const __source = path.resolve(__dirname, 'source')
const __distribution = path.resolve(__dirname, 'distribution')
const __assets = path.resolve(__source, 'assets')

const components = path.resolve(__source, 'components')
const views = path.resolve(__source, 'views')
const styles = path.resolve(__assets, 'styles')
const icons = path.resolve(__assets, 'icons')
const images = path.resolve(__assets, 'images')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__source, 'index.ts')
  },
  output: {
    path: __distribution,
    filename: '[name].js',
    clean: true
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: __distribution
    },
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        exclude: icons
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: icons
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            additionalData: "@import 'styles/shared';"
          }
        }]
      }
    ]
  },
  resolve: {
    alias: { components, views, styles, icons, images },
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'title',
      template: path.resolve(__source, 'index.html')
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    }),
    new ESLintPlugin({
      extensions: ['js', 'ts', 'vue'],
      emitError: true
    })
  ]
}
