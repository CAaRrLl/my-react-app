var commonConf = require('./webpack.common.js');
var merge = require('webpack-merge');
var config = require('./config');
var webpack = require('webpack');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var plugins = [];

if(process.env.BUILD === 'DLL') {
    plugins.push(
        new webpack.DllReferencePlugin({
            context: config.root_path,
            manifest: require(config.build_path + '/' + config.dll.name + '.manifest.json')
        }),
        new HtmlWebpackIncludeAssetsPlugin({ 
            assets: [
                { 
                    path: '',
                    glob: config.dll.name + '.*.dll.js', 
                    globPath: config.build_path
                }
            ],
            append: false 
        })
    );
}
plugins.push(
    new UglifyJsPlugin({
        parallel: true
    })
);

module.exports = merge(commonConf, {
    mode: 'production',

    devtool: 'source-map',

    output: {
        path: config.build_path,
        filename: '[name].[chunkhash].js',
    },

    plugins
});