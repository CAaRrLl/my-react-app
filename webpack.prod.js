var commonConf = require('./webpack.common.js');
var merge = require('webpack-merge');

module.exports = merge(commonConf, {
    output: {
        path: config.build_path,
        filename: '[name].[chunkhash].js'
    }
});