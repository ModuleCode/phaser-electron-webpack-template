const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000
        // ...
        // 详细配置文档：https://webpack.js.org/configuration/dev-server/
    }
}