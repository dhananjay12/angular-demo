const {resolve}= require('path')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => {
   return {
       context : resolve('src'),
       entry: {
           app: './app/root.module.js'
       },
       output :{
           path : resolve('dist'),
           filename:'bundle.[name].[chunkhash].js',
       },
       module: {
           loaders:[
               {test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
               {test: /\.html$/, loaders: ['raw-loader'] },
                {
                test: /\.js?/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {modules: false}]
                        ],
                    }
                },
                exclude: /node_modules/
            },
           ]
       },
       devtool:'source-map',
       plugins: removeEmpty([
            new ProgressBarPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html'
            })
       ])
   }
}