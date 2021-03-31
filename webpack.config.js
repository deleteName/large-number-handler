'use strict'

const path = require('path')
const TersetPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        'large-number': './src/index.js',
        'large-number.min': './src/index.js',
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        library: 'largeNumber',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TersetPlugin({
                test: /.min.js$/
            })
        ]
    }
}