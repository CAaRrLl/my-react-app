var path = require('path');

module.exports = {
    root_path: path.resolve(__dirname),
    src_path: path.resolve(__dirname, 'src'),
    build_path: path.resolve(__dirname, 'dist'),

    app_name: 'ReactApp',
    dev_port: 8001,

    dll: {
        name: 'vendors',
        dependencies: ['react', 'react-dom', 'react-router-dom'] //这些依赖包都可以不参与打包
    }
}
