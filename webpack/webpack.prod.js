const merge = require("webpack-merge")
const common = require("./webpack.common")

const webpack = require("webpack")
const CompressionPlugin = require("compression-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimzizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
    mode: "production",

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimzizeCSSAssetsPlugin({})
        ]
    },

    module: {
        rules: [
            {
                test: /\.(less)$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "less-loader"
                ]
            }
        ]
    },

    plugins: [
        new MiniCSSExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new CompressionPlugin({
            test: /\.js/,
            cache: true,
        })
    ]
})