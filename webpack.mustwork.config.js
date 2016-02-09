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
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
