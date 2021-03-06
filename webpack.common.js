var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');

module.exports = {
    entry: {
        index: path.resolve(config.src_path, 'index.jsx')
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: path.resolve(config.root_path, 'node_modules'),
                include: config.src_path
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
                exclude: path.resolve(config.root_path, 'node_modules'),
                include: config.src_path
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader',
                exclude: path.resolve(config.root_path, 'node_modules'),
                include: config.src_path
            },
            {
                test: /\.(eot|woff2?|svg|ttf)$/i,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.(ico|png|jpg|gif)$/i,
                loader: 'url-loader?limit=8192&name=[path][name].[ext]'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: config.app_name,
            template: path.resolve(config.src_path, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ],
}