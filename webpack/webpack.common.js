const path = require('path')
const webpack = require('webpack')

const project_root = path.resolve(__dirname, "../")

module.exports = {
    context: project_root,
    
    entry: [ path.join(project_root, "/src/index.ts")],

    output: {
        path: path.join(project_root, "/dist"),
        publicPath: path.join(project_root, "./dist/assets/"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 5120
                    }
                }]
            },
            {
                test: /\.(svg)$/,
                use: [{
                    loader: "svg-react-loader"
                }]
            }

        ]
    },

    resolve: {
        extensions: ["*", ".ts", ".tsx", ".js", "jsx"]
    },

    performance: {
        hints: "warning"
    },

    plugins: []
}