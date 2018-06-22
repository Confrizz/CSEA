const merge = require("webpack-merge")
const common = require("./webpack.common.js")

const webpack = require("webpack")

module.exports = merge(common, {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: "awesome-typescript-loader"
                    }
                ]
            },
            {
                test: /\.(less)$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        sourceMap: true
                    }
                },
                {
                    loader: "less-loader"
                }]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: "inline-source-map",

    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        },
        clientLogLevel: "info",
        contentBase: "../dist",
        hot: true
    }
})