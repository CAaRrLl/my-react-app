var commonConf = require('./webpack.common');
var merge = require('webpack-merge');
var config = require('./config');

module.exports = merge(commonConf, {
    devtool: 'eval-source-map',
    devServer: {
        port: config.port
    }
})