var commonConf = require('./webpack.common.js');
var merge = require('webpack-merge');
var config = require('./config');

module.exports = merge(commonConf, {
    mode: 'production',
    output: {
        path: config.build_path,
        filename: '[name].[chunkhash].js',
        // chunkFilename: '[name].[chunkhash].js'
    }
});