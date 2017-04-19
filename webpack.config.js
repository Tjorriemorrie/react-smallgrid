var path = require('path');
var webpack = require('webpack')


module.exports = {

    entry: './src/smallgrid.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'react-smallgrid',
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
            }
        })
    ],

    externals: {
        'react': 'react',
        'lodash': 'lodash',
    }
};
