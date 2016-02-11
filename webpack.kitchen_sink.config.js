var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/KitchenSink.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'kitchen_sink.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?cacheDirectory,presets[]=react,presets[]=es2015']
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
