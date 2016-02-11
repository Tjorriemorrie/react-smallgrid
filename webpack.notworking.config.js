var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/NotWorking.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'notworking.js',
        library: 'NotWorking',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel?cacheDirectory,presets[]=react,presets[]=es2015']
            }
        ]
    }
};
