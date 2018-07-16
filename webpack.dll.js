var config = require('./config');
var webpack  = require('webpack');
var path = require('path');
var dll = {};

dll[config.dll.name] = config.dll.dependencies;

module.exports = {
    mode: 'production',

    entry: dll,

    output: {
        path: config.build_path,
        filename: '[name].[chunkhash].dll.js',
        library: '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(config.build_path, '[name].manifest.json'),
            name: '[name]'
        })
    ]
}