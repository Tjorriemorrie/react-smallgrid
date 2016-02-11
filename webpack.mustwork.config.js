var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/MustWork.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'mustwork.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?cacheDirectory,presets[]=react,presets[]=es2015']
            }
        ]
    }
};
