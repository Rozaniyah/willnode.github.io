const path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        //      publicPath: 'dist',
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        //html: ['html-loader'],
                        scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
                        sass: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
                    }
                }
            }],
        }, {
            test: /\.(svg)$/,
            use: ['svg-inline-loader']
        }, {
            test: /\.(html)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }],
        }]
    },
    plugins: [new webpack.ProgressPlugin()]
}