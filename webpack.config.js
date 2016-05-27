var webpack = require('webpack');

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,

    entry: [
        './app/App.jsx'
    ],

    output: {
        path: '__build__',
        publicPath: '__build__',
        filename: 'build.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules[\/\\]/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|eot|woff2|ttf|svg|woff)$/,
            loader: 'url-loader'
        }]
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};
