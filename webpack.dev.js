var commonConf = require('./webpack.common');
var merge = require('webpack-merge');
var webpack = require('webpack');
var config = require('./config');

module.exports = merge(commonConf, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: config.src_path,
        historyApiFallback: true,
        port: config.port,
        host: '127.0.0.1',
        hot: true
    },
    output: {
        path: config.build_path,
        filename: '[name].[hash].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});