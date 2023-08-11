const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const webpack = require('webpack')

const config = {
    entry: {
        'login': path.resolve(__dirname, 'src/login/index.js'),
        'content': path.resolve(__dirname, 'src/content/index.js'),
        'signup': path.resolve(__dirname, 'src/signup/index.js'),
        'snow-flowers': path.resolve(__dirname, 'src/snow-flowers/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name]/index.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/login.html', // 模板文件
            filename: './login/index.html', // 输出文件
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            template: './public/content.html', // 模板文件
            filename: './content/index.html', // 输出文件
            chunks: ['content']
        }),
        new HtmlWebpackPlugin({
            template: './public/signup.html', // 模板文件
            filename: './signup/index.html', // 输出文件
            chunks: ['signup']
        }),
        new HtmlWebpackPlugin({
            template: './public/flowers.html', // 模板文件
            filename: './snow-flowers/index.html', // 输出文件
            chunks: ['snow-flowers']
        }),
        new MiniCssExtractPlugin({
            filename: './[name]/index.css'
        }),
        new webpack.DefinePlugin({
            // key 是注入到打包后的前端 JS 代码中作为全局变量
            // value 是变量对应的值（在 corss-env 注入在 node.js 中的环境变量字符串）
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          })
    ],
    module: { // 加载器
        rules: [
            {
              test: /\.css$/i,
              // use: ['style-loader', "css-loader"],
              use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
              test: /\.less$/i,
              use: [
                // compiles Less to CSS
                process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader',
              ],
            }
          ],
    },
    optimization: {
        // 最小化
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 
            // `terser-webpack-plugin`），将下一行取消注释（保证 JS 代码还能被压缩处理）
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: "./dist/login"
    },
    stats: {
        children: true
    }
}
module.exports = config