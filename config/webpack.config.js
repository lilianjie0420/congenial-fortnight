const path = require('path');
const pathHandle = (params) => {
    return path.join(__dirname, params);
}

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: pathHandle('../src/index.js'),
    output: {
        path: pathHandle('../dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js[x]?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react项目搭建',
            filename: 'index.html',
            template: pathHandle('../public/index.html'),
            hash: true,
            inject: 'body', // js插入位置
            minify: {
                removeAttributeQuotes: true
            }
        })
    ],
    devServer: {
        static: pathHandle('./dist'),
        compress: true,
        port: 7000,
        open: true,
        historyApiFallback: true
    },
    mode: 'development',
    devtool: 'source-map'
}