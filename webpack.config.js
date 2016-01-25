var path = require('path');

module.exports = {
    entry: {
        smallgrid: path.resolve(__dirname, 'src/SmallGrid.jsx'),
        kitchen_sink: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8989',
            path.resolve(__dirname, 'src/KitchenSink.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
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
