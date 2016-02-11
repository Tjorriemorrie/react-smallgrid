var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/SmallGrid.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'smallgrid.js',
        library: 'SmallGrid',
        libraryTarget: 'umd',
        externals: {
            react: 'react',
            lodash: 'lodash'
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel?cacheDirectory,presets[]=react,presets[]=es2015']
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }, // use ! to chain loaders
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};
